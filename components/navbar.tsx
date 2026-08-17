"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const whatsappHref = "https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20place%20an%20order";
const directionsHref = "https://www.google.com/maps/search/?api=1&query=Maponya+Mall%2C+Chris+Hani+Rd%2C+Soweto%2C+Johannesburg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Only the home page has a full-bleed dark hero sitting behind the nav,
  // so only there should the nav start transparent. Every other page (About,
  // Contact, Shop…) opens straight onto a light section, so it needs the
  // solid/opaque treatment from first paint — the same styling it would get
  // once scrolled past the hero on Home.
  const hasDarkHero = pathname === "/";
  const solid = scrolled || !hasDarkHero;

  useEffect(() => {
    if (!hasDarkHero) return;

    const updateScrollState = () => setScrolled(window.scrollY > 60);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, [hasDarkHero]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div id="site-header" className={`fixed inset-x-0 top-0 z-50 ${solid ? "scrolled" : ""}`}>
        <div id="topbar" className="hidden items-center justify-between px-6 py-2 text-[12px] sm:px-10 md:flex md:px-16 lg:px-24 xl:px-32">
          <div className="flex items-center gap-6 font-mono tracking-[0.02em]">
            <a href="tel:+27832226766" className="flex items-center gap-1.5 transition-colors">
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-brass" aria-hidden="true">
                <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1l-2 2z" />
              </svg>
              +27 83 222 6766
            </a>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-3 w-3 fill-brass" aria-hidden="true">
                <path d="M12 2C7.5 6 4 11.4 4 15a8 8 0 0016 0c0-3.6-3.5-9-8-13z" />
              </svg>
              Maponya Mall, Soweto
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono tracking-[0.02em]">
            <span>Open Daily · 9AM–8PM</span>
            <a
              href={directionsHref}
              target="_blank"
              rel="noopener"
              className="border-b border-brass/60 pb-px transition-colors hover:border-brass hover:text-brass"
            >
              Get Directions
            </a>
          </div>
        </div>

        <nav id="nav" className="flex items-center justify-between px-6 py-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <Link href="/" className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 30" fill="none" className="h-5 w-4 shrink-0" aria-hidden="true">
              <path d="M12 0C12 0 2 14 2 20a10 10 0 0020 0C22 14 12 0 12 0z" stroke="currentColor" strokeWidth="1.4" />
              <path d="M12 8C12 8 7 15 7 19a5 5 0 0010 0C17 15 12 8 12 8z" fill="currentColor" opacity="0.18" />
            </svg>
            <span className="text-[19px] font-semibold leading-none tracking-[0.2em]">NATURESIP</span>
          </Link>

          <div className="hidden items-center gap-9 text-sm md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? "text-accent" : ""}`}>
                {item.label}
              </Link>
            ))}
            <span className="h-4 w-px bg-current opacity-25" />
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-full border border-brass/80 px-4 py-2 text-[13px] text-current transition-colors duration-300 hover:border-brass hover:bg-brass hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-50 flex h-6 w-6 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span className={`block h-px w-5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-px w-5 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-lg md:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className={`font-serif text-3xl ${pathname === item.href ? "text-[#8fd8ee]" : "text-[#eef4f6]"}`}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener"
          onClick={closeMenu}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3 text-sm text-ink"
        >
          Order via WhatsApp
        </a>
      </div>
    </>
  );
}
