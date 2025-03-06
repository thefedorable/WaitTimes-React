"use server";

import { getURL } from "../utils";
import {
  IsUniqueResponse,
  Response,
  UserResponse,
  UserUpdatesResponse,
} from "@shared/Responses";
import { User } from "@shared/User";
import { getAccessToken, getUserID } from "./auth";

/**
 * Gets the current user.
 * @param userID The userID.
 * @returns A promise that resolves to a UserResponse.
 */
export async function getCurrentUser(): Promise<UserResponse> {
  const userID = await getUserID();
  const accessToken = await getAccessToken();

  const response = await fetch(`${getURL()}/user/${userID}`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await response.json();
}

/**
 * Gets a user by ID.
 * @param userID The userID.
 * @returns A promise that resolves to a UserResponse.
 */
export async function getUserByID(userID: number): Promise<UserResponse> {
  const accessToken = await getAccessToken();
  const response = await fetch(`${getURL()}/user/${userID}`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response) throw new Error("No response from this endpoint");
  return await response.json();
}

/**
 * Updates the user.
 * @param userID The userID.
 * @param user The user object containing updated information.
 * @returns A promise that resolves to a UserResponse.
 */
export async function updateUser(
  user: Partial<User>
): Promise<UserUpdatesResponse> {
  const userID = await getUserID();
  const accessToken = await getAccessToken();

  if (user.username) {
    const isUniqueResponse = await isUserUnique({ username: user.username });
    if (!isUniqueResponse.isUnique) {
      return {
        status: 400,
        message: "Username has already been taken.",
        updates: {},
      };
    }
  }

  const response = await fetch(`${getURL()}/user/${userID}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      lastUpdated: Date.now(),
      ...user,
    }),
  });
  return await response.json();
}

/**
 * Deletes the user.
 * @param userID The userID.
 * @returns A promise that resolves to a Response.
 */
export async function deleteUser(userID: number): Promise<Response> {
  const response = await fetch(`${getURL()}/user/${userID}`, {
    credentials: "include",
    method: "DELETE",
  });
  if (!response) throw new Error("No response from this endpoint");
  return await response.json();
}

/**
 * Checks if the user is unique.
 * @returns A promise that resolves to an IsUniqueResponse.
 */
export async function isUserUnique({
  email,
  username,
}: {
  email?: string;
  username?: string;
}): Promise<IsUniqueResponse> {
  const response = await fetch(`${getURL()}/user/unique`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      username: username,
    }),
  });
  if (!response) throw new Error("No response from this endpoint");
  return await response.json();
}
