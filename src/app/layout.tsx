import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";

// Load the Press Start 2P font
const pressStart2P = Press_Start_2P({
  weight: "400", // Specify the font weight
  subsets: ["latin"], // Specify the subset
  variable: "--font-press-start-2p", // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: "MOCHAMADFW - PORTOFOLIO",
  description: "MOCHAMADFW Portofolio Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}