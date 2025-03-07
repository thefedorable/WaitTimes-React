import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges them with Tailwind classes using twMerge.
 * @param {...ClassValue[]} inputs - The class values to be combined.
 * @returns {string} The combined class name.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
