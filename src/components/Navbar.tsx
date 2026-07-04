"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Intro" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex font-medium text-sm rounded-full ring-1 px-3 ring-zinc-900/5 backdrop-blur shadow-lg shadow-zinc-800/5">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === link.href
            : pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-3 py-2 hover:text-[#007bff]",
              isActive && "text-[#007bff]",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
