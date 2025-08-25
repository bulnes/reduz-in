import { urlsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { unstable_cache } from "next/cache";
import { notFound, redirect } from "next/navigation";

const db = drizzle(process.env.DATABASE_URL!);

export default async function ShortUrlPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pathname = `/s/${slug}`;

  // Find if the redirect exists in the database
  const existingUrl = unstable_cache(
    async () => {
      return await db
        .select()
        .from(urlsTable)
        .where(eq(urlsTable.shortenedUrlPathname, pathname))
        .limit(1);
    },
    [pathname] // add the pathname to the cache key
  );

  // Check if the cached data exists
  // If it exists, redirect to the original URL
  // If it doesn't exist, return a 404 not found
  const cachedData = await existingUrl();

  if (cachedData && cachedData.length > 0) {
    const [data] = cachedData;
    const { originalUrl } = data;

    redirect(originalUrl);
  }

  return notFound();
}
