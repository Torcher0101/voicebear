import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VoiceBear - Type at the Speed of Thought",
  description: "The fastest AI transcription tool for macOS. Privacy-first, offline-capable.",
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning={true}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
