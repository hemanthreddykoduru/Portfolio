import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koduru Hemanth Reddy | Full-Stack Developer",
  description: "Portfolio of Koduru Hemanth Reddy, a Full-Stack Developer specializing in modern web applications, cinematic UIs, and scalable architecture.",
  keywords: ["Full-Stack Developer", "Next.js Portfolio", "React Developer", "Hemanth Reddy", "Koduru Hemanth Reddy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
