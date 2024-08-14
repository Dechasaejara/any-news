import { ArticleRequest } from "@/backened/types/article-type";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLastmonthDate() {
  const currentDate = new Date();
  const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate() + 1);
  const formattedLastMonthDate = lastMonthDate.toISOString().slice(0, 10);
  return formattedLastMonthDate;
}

export function formatPublishedDate(publishedDate: string) {
  // Convert the published date string to a Date object
  const publishedAt = new Date(publishedDate);

  // Get the current date
  const now = new Date();

  // Calculate the time difference in milliseconds
  const timeDiff = now.getTime() - publishedAt.getTime();

  // Convert the time difference to seconds, minutes, hours, days, months, and years
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Calculate the number of months
  const monthsDiff = now.getMonth() - publishedAt.getMonth() + (12 * (now.getFullYear() - publishedAt.getFullYear()));
  const months = Math.max(0, monthsDiff);

  // Calculate the number of years
  const yearsDiff = now.getFullYear() - publishedAt.getFullYear();
  const years = Math.max(0, yearsDiff);

  // Determine the appropriate time unit and format the output
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
}

