"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nap } from "@/lib/contact";
import { navLinks } from "@/lib/heartland-site";
import CtaButtons from "@/components/heartland/CtaButtons";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const primaryLinks = navLinks.slice(0, 6);
  const moreLinks = navLinks.slice(6);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-[padding] duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col min-w-0">
            <span className="font-bold text-slate-900 text-sm sm:text-base leading-tight truncate">
              Heartland Cottages
            </span>
            <span className="text-xs text-slate-600 truncate">
              Dr. Jan Duffy · {nap.license}
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main"
          >
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-700 px-2 py-2 rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-700 px-2 py-2 rounded-md"
                aria-expanded={isMoreOpen}
                onClick={() => setIsMoreOpen((open) => !open)}
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
              {isMoreOpen ? (
                <div className="absolute right-0 mt-1 w-52 rounded-md border border-slate-200 bg-white shadow-lg py-2 z-50">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>

          <div className="hidden lg:block shrink-0">
            <Button asChild size="sm">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <div className="lg:hidden border-t border-slate-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 px-2 text-slate-800 font-medium border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <CtaButtons variant="onLight" />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
