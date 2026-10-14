
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const categories = [
        { name: "Electronics", slug: "electronics" },
        { name: "Computers", slug: "computers" },
        { name: "Home & Kitchen", slug: "home-kitchen" },
        { name: "Fashion", slug: "fashion" },
        { name: "Beauty", slug: "beauty" },
        { name: "Sports", slug: "sports" },
        { name: "Health", slug: "health" },
        { name: "Automotive", slug: "automotive" },
        { name: "Tools", slug: "tools" },
        { name: "Toys & Games", slug: "toys-games" },
        { name: "Books", slug: "books" },
        { name: "Pet Supplies", slug: "pet-supplies" },
    ];

    const isHomeActive = pathname === "/";

    const isCategoryActive = (slug) =>
        pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);

    // Strong raised neumorphic effect
    const raisedEffect =
        "shadow-[5px_5px_10px_rgba(48,47,47,0.18),-5px_-5px_10px_rgba(255,255,255,0.95)]";

    // Deep pressed neumorphic effect
    const pressedEffect =
        "shadow-[inset_4px_4px_8px_rgba(48,47,47,0.20),inset_-3px_-3px_7px_rgba(255,255,255,0.18)]";

    const homeClass = isHomeActive
        ? `bg-[#EB4124] text-white ${pressedEffect} ring-1 ring-[#EB4124]/20`
        : `bg-[#FFFDF8] text-[#302F2F] ${raisedEffect} hover:bg-[#EB4124] hover:text-white hover:shadow-[7px_7px_13px_rgba(48,47,47,0.22),-4px_-4px_9px_rgba(255,255,255,0.95)]`;

    return (
        <nav className="relative z-40 w-full border-t border-[#302F2F]/5 bg-[#FFFDF8] shadow-[0_5px_15px_rgba(48,47,47,0.08)]">
            <div className="mx-auto flex h-[52px] w-full max-w-[1580px] items-center gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8 scrollbar-hide">

                {/* HOME */}
                <Link
                    href="/"
                    aria-current={isHomeActive ? "page" : undefined}
                    className={`
                        group relative flex h-[34px] shrink-0 items-center justify-center
                        rounded-[8px] px-5 text-[11px] font-bold tracking-[0.06em]
                        transition-all duration-300 ease-out
                        hover:-translate-y-[2px]
                        active:translate-y-[1px]
                        ${homeClass}
                    `}
                >
                    <span className="relative z-10">Home</span>

                    {!isHomeActive && (
                        <span className="pointer-events-none absolute inset-0 rounded-[8px] bg-gradient-to-br from-white/50 to-transparent opacity-70" />
                    )}
                </Link>

                {/* DIVIDER */}
                <div className="h-6 w-px shrink-0 bg-gradient-to-b from-transparent via-[#302F2F]/20 to-transparent" />

                {/* CATEGORIES */}
                <div className="flex h-full items-center gap-2 py-2">
                    {categories.map((category) => {
                        const active = isCategoryActive(category.slug);

                        return (
                            <Link
                                key={category.slug}
                                href={`/${category.slug}`}
                                aria-current={active ? "page" : undefined}
                                className={`
                                    group relative flex h-[34px] shrink-0
                                    items-center justify-center whitespace-nowrap
                                    rounded-[8px] px-4
                                    text-[11px] font-semibold tracking-[0.025em]
                                    transition-all duration-300 ease-out
                                    hover:-translate-y-[2px]
                                    active:translate-y-[1px]
                                    ${
                                        active
                                            ? `bg-[#EB4124] text-white ${pressedEffect} ring-1 ring-[#EB4124]/20`
                                            : `bg-[#FFFDF8] text-[#302F2F]/85 ${raisedEffect}
                                               hover:bg-[#FFFDF8] hover:text-[#EB4124]
                                               hover:shadow-[7px_7px_13px_rgba(48,47,47,0.22),-5px_-5px_10px_rgba(255,255,255,1)]`
                                    }
                                `}
                            >
                                {/* Subtle top highlight */}
                                {!active && (
                                    <span className="pointer-events-none absolute inset-[1px] rounded-[7px] border border-white/80" />
                                )}

                                <span className="relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                                    {category.name}
                                </span>

                                {/* Active indicator */}
                                {active && (
                                    <span className="absolute bottom-[3px] left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-white/90 shadow-[0_0_5px_rgba(255,255,255,0.6)]" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;