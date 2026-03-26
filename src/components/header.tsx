"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]">
      <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-2xl" />
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight gradient-text"
        >
          MASA
        </Link>
        <div className="flex items-center gap-1 rounded-full bg-white/[0.06] p-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/[0.1] text-white"
                    : "text-dark-muted hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
