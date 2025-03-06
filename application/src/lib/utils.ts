import { Response } from "@shared/Responses";
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
 * Returns the URL based on the environment.
 * @returns {string} The URL string.
 */
export function getURL(): string {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3500"
    : "https://ropeswing-production-domain.com";
}

/**
 * Checks if the response status indicates a successful request.
 * @param {Response} response - The response object to check.
 * @returns {boolean} True if the status is between 200 and 299, otherwise false.
 */
export function isSuccess(response: Response): boolean {
  return response.status >= 200 && response.status < 300;
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

/**
 * Formats a number by adding a "K" suffix if it is 1000 or greater.
 *
 * @param number - The number to format.
 * @returns A string representation of the number, with "K" suffix if applicable.
 */
export function formatNumber(number: number): string {
  return number >= 1000
    ? (number / 1000).toFixed(1) + "K"
    : number?.toString() ?? 0;
}

/**
 * Formats a given date string into a human-readable format.
 * If the date is tomorrow, it returns "Tomorrow" followed by the time.
 * Otherwise, it returns the formatted date with the day, month, year, and time.
 *
 * @param {Date | string} dateInput - The date to format.
 * @returns {string} The formatted date string.
 */
export const formatDate = (dateInput: Date | string): string => {
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  if (isNaN(date.getTime())) return "Invalid date";

  const now = new Date();

  // Adjust for timezone difference
  const options: Intl.DateTimeFormatOptions = { timeZone: "UTC" };
  const tomorrow = new Date(
    new Intl.DateTimeFormat("en-US", options).format(now)
  );
  tomorrow.setDate(now.getDate() + 1);

  const isTomorrow = date?.toDateString() === tomorrow.toDateString();

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();

  const hour = date.getUTCHours() % 12 || 12; // Convert to 12-hour format
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const amPm = date.getUTCHours() >= 12 ? "PM" : "AM";

  /**
   * Add ordinal suffix to the day (e.g., 1st, 2nd, 3rd, 4th...).
   */
  const ordinalSuffix = (n: number) => {
    if (n >= 11 && n <= 13) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formattedDate = `${month} ${day}${ordinalSuffix(
    day
  )}, ${year} at ${hour}:${minutes}${amPm}`;

  return isTomorrow ? `Tomorrow at ${hour}:${minutes}${amPm}` : formattedDate;
};
