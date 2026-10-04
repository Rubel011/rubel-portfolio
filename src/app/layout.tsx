import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rubel Foridi — Full Stack Developer",
  description:
    "Backend-focused full stack developer in Kolkata. I build and run the Node.js, MongoDB, Redis, and AWS systems behind consumer platforms with millions of users.",
};

export const viewport: Viewport = {
  themeColor: "#f7f8f9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <TooltipProvider>
          {children}
          <Toaster theme="light" position="bottom-right" />
        </TooltipProvider>
      </body>
    </html>
  );
}
