import type { Metadata } from "next";
import { Newsreader, Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const headlineFont = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phoenix Forge Press",
  description: "Independent fantasy publishing forged with myth, fire, and story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headlineFont.variable} ${bodyFont.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-body text-on-surface selection:bg-primary/30">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
