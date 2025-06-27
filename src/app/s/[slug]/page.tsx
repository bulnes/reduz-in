import { urlsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

const db = drizzle(process.env.DATABASE_URL!);

export default async function ShortUrlPage({ params }: Props) {
  const { slug } = await params;
  const pathname = `/s/${slug}`;

  // Find if the redirect exists in the database
  const existingUrl = await db
    .select()
    .from(urlsTable)
    .where(eq(urlsTable.shortenedUrlPathname, pathname))
    .limit(1);

  if (existingUrl && existingUrl.length > 0) {
    const [data] = existingUrl;
    const { originalUrl } = data;

    redirect(originalUrl);
  }

  return notFound();
}
