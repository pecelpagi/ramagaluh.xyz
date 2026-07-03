"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog Posts" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex gap-6 py-4 border-b">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={pathname === link.href ? "font-bold" : ""}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
