import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/StairTransition";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Sami Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>
        {/* Background Beams */}
        <BackgroundBeams className="absolute inset-0 z-0 pointer-events-none" />

        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <StairTransition />
          <PageTransition>{""}</PageTransition>
          {children}
        </div>
      </body>
    </html>
  );
}
