"use server";

import { urlsTable } from "@/db/schema";
import { generateShortPathname } from "@/utils/generate-short-pathname";
import { getFullShortURL } from "@/utils/get-full-short-url";
import { eq } from "drizzle-orm";
import { drizzle } from 'drizzle-orm/neon-http';

const db = drizzle(process.env.DATABASE_URL!);

export const submitUrl = async (url: string) => {
  const urlData: typeof urlsTable.$inferInsert = {
    originalUrl: url,
    shortenedUrlPathname: generateShortPathname(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // Find if the URL already exists
  const existingUrl = await db.select().from(urlsTable).where(eq(urlsTable.originalUrl, url));
  if (existingUrl && existingUrl.length > 0) {
    return getFullShortURL(existingUrl[0].shortenedUrlPathname); // Return the existing shortened URL
  }

  await db.insert(urlsTable).values(urlData);
  return getFullShortURL(urlData.shortenedUrlPathname); // Return the newly created shortened URL
}
