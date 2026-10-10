"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/content/navigation";
import { ctas } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { PromoBanner } from "./PromoBanner";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // The menu is tied to the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean) => setOpenOn(value ? pathname : null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        solid
          ? "bg-white/90 shadow-[0_1px_0_rgb(17_20_57/0.08)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only rounded-md bg-white px-4 py-2 font-semibold text-ink focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <PromoBanner />
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-white/50",
                      active && "bg-white/60",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={ctas.primary.href} className="max-sm:hidden">
            {ctas.primary.label}
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-11 place-items-center rounded-full text-ink transition hover:bg-white/60 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X aria-hidden="true" className="size-6" />
            ) : (
              <Menu aria-hidden="true" className="size-6" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-ink/10 bg-white px-5 pt-2 pb-6 shadow-lift sm:px-8 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block rounded-lg px-2 py-3 text-lg font-semibold text-ink hover:bg-lilac"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-lg font-semibold text-ink hover:bg-lilac"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <ButtonLink
          href={ctas.primary.href}
          size="lg"
          className="mt-4 w-full"
          onClick={() => setOpen(false)}
        >
          {ctas.primary.label}
        </ButtonLink>
      </div>
    </header>
  );
}
