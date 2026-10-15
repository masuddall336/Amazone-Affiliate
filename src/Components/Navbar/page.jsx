
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronRight,
  Home,
  ShoppingBag,
  House,
  Shirt,
  Hand,
  HeartPulse,
  Gamepad2,
  Laptop,
  Sparkles,
  Trophy,
  BookOpen,
  PawPrint,
  PanelLeftClose,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Home & Kitchen", slug: "home&kitchen", icon: House },
    { name: "Household", slug: "household", icon: Home },
    {
      name: "Fashion & Accessories",
      slug: "fashion&accessories",
      icon: Shirt,
    },
    {
      name: "Handmade Products",
      slug: "handmade-products",
      icon: Hand,
    },
    { name: "Health", slug: "health", icon: HeartPulse },
    { name: "Best Games", slug: "games", icon: Gamepad2 },
    { name: "Tech", slug: "tech", icon: Laptop },
    {
      name: "Best Beauty Items",
      slug: "best-beauty-items",
      icon: Sparkles,
    },
    { name: "Sports", slug: "sports", icon: Trophy },
    { name: "Toys & Games", slug: "toys-games", icon: Gamepad2 },
    { name: "Books", slug: "books", icon: BookOpen },
    { name: "Pet Supplies", slug: "pet-supplies", icon: PawPrint },
  ];

  const isHomeActive = pathname === "/";

  const isCategoryActive = (slug) => {
    const categoryPath = `/${slug}`;

    return (
      pathname === categoryPath ||
      pathname.startsWith(`${categoryPath}/`)
    );
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock background scrolling while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinkClass = (active) =>
    `group flex min-h-[46px] items-center gap-3 rounded-xl px-4 py-3
    text-sm font-semibold transition-all duration-200
    ${
      active
        ? "bg-[#EB4124] text-white shadow-[inset_3px_3px_6px_rgba(120,20,10,0.18)]"
        : "text-[#302F2F] hover:bg-white hover:text-[#EB4124] hover:shadow-[3px_3px_8px_rgba(48,47,47,0.08)]"
    }`;

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: FaInstagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      icon: FaYoutube,
    },
  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="sticky top-0 z-40 w-full border-t border-[#302F2F]/5 bg-[#FFFDF8]/95 shadow-[0_4px_16px_rgba(48,47,47,0.07)] backdrop-blur-xl">
        <div className="mx-auto flex h-[50px] max-w-[1580px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* LEFT: MENU + BRAND LABEL */}
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open category menu"
              aria-expanded={isOpen}
              aria-controls="category-drawer"
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#FFFDF8] text-[#302F2F] shadow-[4px_4px_9px_rgba(48,47,47,0.12),-3px_-3px_7px_rgba(255,255,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#EB4124] active:translate-y-0 active:shadow-inner"
            >
              <Menu size={22} strokeWidth={2.2} />
            </button>

            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold tracking-wide text-[#302F2F] sm:text-base">
                Shop by Category
              </p>

              <p className="hidden text-[11px] font-medium text-[#302F2F]/55 sm:block">
                Explore our collections
              </p>
            </div>
          </div>

          {/* RIGHT: SOCIAL MEDIA ICONS ONLY */}
          <div className="flex shrink-0 items-center gap-4 sm:gap-5">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-8 w-5 items-center justify-center text-[#302F2F]/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#EB4124]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* DRAWER OVERLAY */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[60] bg-[#171717]/45 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      {/* LEFT CATEGORY DRAWER */}
      <aside
        id="category-drawer"
        role="dialog"
        aria-modal={isOpen ? "true" : undefined}
        aria-label="Shop categories"
        aria-hidden={!isOpen}
        className={`fixed inset-y-0 left-0 z-[70] flex w-[min(340px,88vw)] flex-col border-r border-[#302F2F]/10 bg-[#FFFDF8] shadow-[12px_0_40px_rgba(0,0,0,0.16)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* DRAWER HEADER */}
        <div className="flex min-h-[82px] items-center justify-between border-b border-[#302F2F]/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EB4124] text-white shadow-[3px_3px_8px_rgba(235,65,36,0.24)]">
              <ShoppingBag size={22} />
            </div>

            <div>
              <h2 className="text-base font-extrabold text-[#302F2F]">
                Discover
              </h2>

              <p className="mt-0.5 text-xs text-[#302F2F]/55">
                Find your favorites
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close category menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-[#302F2F]/65 transition-colors hover:bg-white hover:text-[#EB4124]"
          >
            <X size={22} />
          </button>
        </div>

        {/* DRAWER CONTENT */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5">
          <p className="mb-3 px-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#302F2F]/45">
            Main Menu
          </p>

          <Link
            href="/"
            aria-current={isHomeActive ? "page" : undefined}
            tabIndex={isOpen ? 0 : -1}
            className={navLinkClass(isHomeActive)}
          >
            <Home size={19} strokeWidth={1.9} />
            <span className="flex-1">Home</span>

            {isHomeActive && (
              <span className="h-2 w-2 rounded-full bg-white" />
            )}
          </Link>

          <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#302F2F]/15 to-transparent" />

          <div className="mb-3 flex items-center justify-between px-3">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#302F2F]/45">
              All Categories
            </p>

            <span className="rounded-full bg-white px-2 py-1 text-[10px] font-bold text-[#302F2F]/55">
              {categories.length}
            </span>
          </div>

          <div className="space-y-1.5">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = isCategoryActive(category.slug);

              return (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  aria-current={active ? "page" : undefined}
                  tabIndex={isOpen ? 0 : -1}
                  className={navLinkClass(active)}
                >
                  <Icon
                    size={19}
                    strokeWidth={1.9}
                    className="shrink-0"
                  />

                  <span className="min-w-0 flex-1">
                    {category.name}
                  </span>

                  {active ? (
                    <span className="h-2 w-2 shrink-0 rounded-full bg-white" />
                  ) : (
                    <ChevronRight
                      size={16}
                      className="shrink-0 text-[#302F2F]/25 transition-transform group-hover:translate-x-0.5 group-hover:text-[#EB4124]"
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* DRAWER FOOTER */}
        <div className="border-t border-[#302F2F]/10 p-4">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#302F2F]/65 shadow-[inset_2px_2px_5px_rgba(48,47,47,0.06)] transition-colors hover:text-[#EB4124]"
          >
            <PanelLeftClose size={17} />
            Close Category Menu
          </button>
        </div>
      </aside>
    </>
  );
};

export default Navbar;