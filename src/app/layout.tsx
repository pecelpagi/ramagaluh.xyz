import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans max-w-4xl mx-auto px-4`}>
        <Header /> {children}
      </body>
    </html>
  );
}
