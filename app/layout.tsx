import type { Metadata } from "next";
import { Inter, Libre_Baskerville, Poppins } from "next/font/google";
import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-libre" });

export const metadata: Metadata = {
  title: "Chirag Paswan | Official Digital Presence",
  description:
    "Official digital presence of Chirag Paswan, Union Minister of Food Processing Industries, MP Hajipur, and National President LJP (Ram Vilas)."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} ${libre.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
