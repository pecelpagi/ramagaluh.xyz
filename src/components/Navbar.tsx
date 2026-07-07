"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ArrowDropDownLine from "@/assets/icons/arrow-drop-down-line.svg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Intro" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="hidden md:flex bg-background font-medium text-sm rounded-full ring-1 px-3 ring-zinc-900/5 backdrop-blur shadow-lg shadow-zinc-800/5 transition-colors dark:ring-white/10 dark:shadow-black/30">
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
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden bg-background flex items-center justify-center font-semibold text-sm rounded-full ring-1 px-4 h-[30px] ring-zinc-900/5 backdrop-blur shadow-lg shadow-zinc-800/5 transition-colors dark:ring-white/10 dark:shadow-black/30"
      >
        Menu
        <ArrowDropDownLine className="ml-2 w-[18px] h-[18px]" />
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>
              <span className="text-sm font-medium">Navigation</span>
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col divide-y divide-border text-base">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-2 hover:text-[#007bff]",
                    isActive && "text-[#007bff]",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
