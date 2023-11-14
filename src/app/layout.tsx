import "./globals.css";
import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RetroGamesMeetup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <head>
          <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
        </head>
        <body className={pressStart.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
