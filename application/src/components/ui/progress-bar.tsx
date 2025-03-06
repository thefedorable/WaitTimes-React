"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

/**
 * Providers component that wraps its children with a ProgressBar.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The child components to be wrapped.
 * @returns {JSX.Element} The Providers component with a ProgressBar.
 */
const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="hsl(var(--primary))"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBarProvider;
