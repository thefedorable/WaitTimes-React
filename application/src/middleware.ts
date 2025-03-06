import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose"; // Lightweight JWT library for Edge
import { getURL } from "@/lib/utils";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

/**
 * Middleware to handle authentication and token verification.
 * @param {NextRequest} request - The incoming request.
 * @returns {Promise<NextResponse>}
 */
export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const jwtToken = request.cookies.get("jwtToken")?.value; // Refresh token

  if (!accessToken) {
    console.log("Access token missing. Attempting refresh...");
    return await attemptRefresh(request, jwtToken, accessToken);
  }

  try {
    // Verify the access token and check expiration
    const { payload } = await jwtVerify(accessToken, JWT_SECRET);
    const expirationTime = payload.exp ? payload.exp * 1000 : 0; // Convert exp from seconds to milliseconds

    if (Date.now() > expirationTime) {
      console.log("Access token expired. Attempting refresh...");
      return await attemptRefresh(request, jwtToken, accessToken);
    }

    console.log("Token is valid. Proceeding.");
    return NextResponse.next(); // Continue as normal if token is valid
  } catch (error) {
    console.error("Invalid or expired token. Attempting refresh...", error);
    return await attemptRefresh(request, jwtToken, accessToken);
  }
}

/**
 * Attempts to refresh the access token using the refresh token (JWT).
 * @param {NextRequest} request - The incoming request.
 * @param {string | undefined} jwtToken - The refresh token from cookies.
 * @returns {Promise<NextResponse>}
 */
async function attemptRefresh(
  request: NextRequest,
  jwtToken: string | undefined,
  accessToken: string | undefined
) {
  if (!jwtToken || !accessToken) {
    console.log("No refresh token available. Redirecting to login.");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const refreshResponse = await fetch(`${getURL()}/auth/refresh`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Cookie: `jwt=${jwtToken}`,
      },
    });

    if (!refreshResponse.ok) {
      const errorDetails = await refreshResponse.json();
      console.error("Error refreshing token:", errorDetails);
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const { accessToken: newToken } = await refreshResponse.json();
    if (!newToken) {
      console.log("Failed to retrieve new access token. Redirecting to login.");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    console.log("Token refreshed successfully.");

    // Set the new access token in cookies
    const response = NextResponse.next();
    response.cookies.set("accessToken", newToken, { httpOnly: true });

    return response;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/campaigns/:path*", "/settings/:path*", "/campaignview/:path*"], // Apply to protected routes
};
