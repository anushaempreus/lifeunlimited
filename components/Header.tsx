"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Our People", href: "/our-people" },
  { label: "Training", href: "/training-and-education" },
  { label: "Retreats", href: "/retreat" },
  { label: "Resources", href: "/resource" },
  { label: "Workshop Resources", href: "/workshop-resources" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-3 z-50 px-3 -mb-[64px]">
      <div
        className={`mx-auto max-w-[1220px] border transition-all duration-300 bg-white/80 backdrop-blur-xl ${
          open ? "rounded-[1.6rem]" : "rounded-full"
        } ${
          scrolled
            ? "border-gray-200/80 shadow-[0_14px_40px_-18px_rgba(51,56,63,0.35)]"
            : "border-gray-200/50 shadow-[0_6px_24px_-16px_rgba(51,56,63,0.25)]"
        }`}
      >
        <div className="flex items-center justify-between gap-6 h-[64px] pl-6 pr-3">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label="Life Unlimited — home">
            <Image
              src="/images/logo.png"
              alt="Life Unlimited"
              width={160}
              height={36}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => {
                const current =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={`rounded-full px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                        current
                          ? "bg-olive/20 text-heading"
                          : "text-body hover:text-heading hover:bg-gray-100/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="tel:0262485138"
              className="btn-blue !py-2.5 !px-5 text-sm whitespace-nowrap hidden md:inline-flex"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden>
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .6 3 .7a2 2 0 0 1 1.6 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              02 6248 5138
            </a>

            <button
              className="lg:hidden p-2.5 text-heading rounded-full hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu — expands inside the pill */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[440px] border-t border-gray-100" : "max-h-0"
          }`}
        >
          <nav aria-label="Mobile">
            <ul className="px-6 py-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[15px] font-medium text-heading hover:text-blue-dark hover:translate-x-1 transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3 pb-2">
                <a href="tel:0262485138" className="btn-blue text-sm">
                  02 6248 5138
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
