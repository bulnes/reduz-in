import { Analytics } from "@vercel/analytics/next";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

const metadataProps = {
  title: "Reduz.in - Shorten your links easily",
  description:
    "Reduz.in is a simple and intuitive URL shortening service that allows you to shorten your links quickly and efficiently. No complicated steps, just paste your URL and get a shortened version in seconds.",
};

export const metadata: Metadata = {
  title: metadataProps.title,
  description: metadataProps.description,
  keywords: [
    "URL shortening",
    "link shortener",
    "shorten links",
    "easy URL shortener",
    "fast link shortener",
    "simple URL shortener",
    "shorten URL",
    "link management",
    "URL shortener service",
    "free URL shortener",
    "short links",
    "link tracker",
    "URL redirection",
    "shortened links",
    "link sharing",
    "URL shortening service",
    "short URL generator",
    "quick link shortener",
    "URL shortening tool",
    "link shortening",
    "short URL service",
  ],
  authors: [
    {
      name: "Bruno Bulnes",
      url: "https://bbulnes.dev/",
    },
  ],
  publisher: "Bruno Bulnes",
  openGraph: {
    title: metadataProps.title,
    description: metadataProps.description,
    url: "https://reduz.in",
    siteName: "Reduz.in",
    images: [
      {
        url: "https://reduz.in/og-image.png",
        width: 1024,
        height: 1024,
        alt: "Reduz.in - Shorten your links easily",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataProps.title,
    description: metadataProps.description,
    images: ["https://reduz.in/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/reduzin-crop.png",
  },
  themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "https://reduz.in",
    types: {
      "application/xml": "/sitemap.xml",
    },
  },
  verification: {
    google:
      "google-site-verification=R_pmQcQXFZUJGYUHuRcouefQVLozU63OMKaDYNfyXT0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
