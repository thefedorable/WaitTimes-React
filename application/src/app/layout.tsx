import type { Metadata } from "next";
import { Figtree, Manrope } from "next/font/google";
import "./globals.css";
import React from "react";
import ProgressBarProvider from "@/components/ui/progress-bar";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RopeSwing",
  description: "Create Cool Campaigns!",
};

/**
 * The Root Layout.
 * @param children Children components.
 * @returns The Root Layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${manrope.variable} antialiased`}>
        <ProgressBarProvider>{children}</ProgressBarProvider>
      </body>
    </html>
  );
}
