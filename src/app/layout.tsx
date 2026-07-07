import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const THEME_COOKIE_KEY = "theme";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "My personal website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isDarkMode = cookieStore.get(THEME_COOKIE_KEY)?.value === "dark";

  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, isDarkMode && "dark")}
    >
      <body className={`antialiased font-sans max-w-4xl mx-auto`}>
        <Header initialIsDarkMode={isDarkMode} /> {children}
      </body>
    </html>
  );
}
