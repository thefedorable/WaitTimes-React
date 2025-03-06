"use client";

import Link from "next/link";
import React from "react";

interface NavItemProps {
  key: number;
  item: {
    name: string;
    href: string;
  };
  isMobile?: boolean;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * NavItem component that renders a navigation link.
 * @param {string} props.item.name - The name of the navigation item.
 * @param {string} props.item.href - The href of the navigation item.
 * @param {string} props.item.isMoble - Whether the navItems should render in moble.
 */
const NavItem = ({ isMobile = false, ...props }: NavItemProps) => {
  return isMobile ? (
    <Link
      key={props.key}
      href={props.item.href}
      className="hover:text-muted-foreground px-3 py-2 rounded-md text-sm font-medium"
      onClick={() => {
        if (props.setIsMobileMenuOpen) {
          props.setIsMobileMenuOpen(false);
        }
      }}
    >
      {props.item.name}
    </Link>
  ) : (
    <Link
      key={props.key}
      href={props.item.href}
      className="hover:text-muted-foreground px-3 py-2 rounded-md text-md font-medium"
    >
      {props.item.name}
    </Link>
  );
};

export default NavItem;
