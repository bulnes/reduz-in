import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reduz.in - Shorten your links easily",
  description:
    "Reduz.in is a simple and intuitive URL shortening service that allows you to shorten your links quickly and efficiently. No complicated steps, just paste your URL and get a shortened version in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
