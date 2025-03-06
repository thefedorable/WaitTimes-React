"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import RopeSwingLogo from "@public/logo-white.png";

/**
 * Logo component that renders the RopeSwing logo with a link to the homepage.
 */
export default function Logo({
  isAuthenticated = false,
}: {
  isAuthenticated?: boolean;
}) {
  return (
    <Link
      href={isAuthenticated ? "/dashboard" : "/"}
      className="flex items-center gap-2 font-medium md:min-w-[240px]"
    >
      <Image
        src={RopeSwingLogo}
        width={240}
        height={120}
        alt="RopeSwing Logo"
        className="w-[180px] md:w-[240px]"
      />
    </Link>
  );
}
