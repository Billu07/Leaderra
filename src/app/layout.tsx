import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileCTA from "@/components/MobileCTA";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta", // This matches the CSS variable in globals.css
});

export const metadata: Metadata = {
  title: "Leaderra | Sales Readiness & Inbound Optimization",
  description:
    "Prepare inbound leads for focused, decision-oriented sales conversations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans`}>
        <Navbar />
        {children}
        <MobileCTA />
      </body>
    </html>
  );
}
