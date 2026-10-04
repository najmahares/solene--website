import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="site-wrapper">
        <Navbar />
        
        <main className="main-content">
          {children}
        </main>
        
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Solène",
  description: "Health and conservation platform for mountain gorillas.",
};

export default function RootLayout({ children }: { readonly children: ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}