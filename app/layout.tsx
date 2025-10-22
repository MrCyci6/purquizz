import type { Metadata } from "next";
import { Carter_One } from "next/font/google";

import "@/styles/globals.css";

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const carterOne = Carter_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-carter-one"
})

export const metadata: Metadata = {
  title: "PurQuizz",
  description: "Purity test app for nextjs training",
};

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={carterOne.variable}>
      <body className="bg-secondary text-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
