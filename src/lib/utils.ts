import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// convert date to string
export const getTimestamp = (createdAt: Date): string => {
  const seconds = Math.floor(
    (new Date().getTime() - createdAt.getTime()) / 1000
  );
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return "Just now";
};

// bignumber to string
export const formatBigNumber = (num: number | bigint): string => {
  let result: string;
  let divisor: bigint = BigInt(1000000);

  if (typeof num === "bigint") {
    num = BigInt(num);
  } else {
    num = BigInt(num);
  }

  if (num >= divisor) {
    result = (num / divisor).toString() + "M";
  } else {
    divisor = divisor / BigInt(1000);
    if (num >= divisor) {
      result = (num / divisor).toString() + "K";
    } else {
      result = num.toString();
    }
  }

  return result;
};
