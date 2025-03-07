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

/**
 * Appends an ellipsis ("...") to the end of a string if the string exceeds the maxLength.
 *
 * @param string - The input string to be truncated.
 * @param maxLength - The maximum length of the truncated string, including the ellipsis. Defaults to 200.
 * @returns The truncated string with an ellipsis appended if it exceeds the maximum length.
 */
export function ellipsis(string: string, maxLength: number = 200): string {
  return string.length > maxLength
    ? `${string.substring(0, maxLength)}...`
    : string;
}