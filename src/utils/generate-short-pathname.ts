import { nanoid } from "nanoid";

export function generateShortPathname(): string {
  const urlHash = nanoid(7);
  return `/s/${urlHash}`;
}
