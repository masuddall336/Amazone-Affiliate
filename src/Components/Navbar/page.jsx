
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

    const isCategoryActive = (slug) => {
        return pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);
    };

    return (
        <nav className="relative z-40 w-full border-t border-[#302F2F]/5 bg-[#FFFDF8] shadow-[0_4px_14px_rgba(48,47,47,0.10)]">
            <div className="mx-auto flex h-[46px] w-full max-w-[1580px] items-center overflow-x-auto px-3 sm:px-5 lg:px-7 scrollbar-hide">

                {/* HOME */}

                <Link
                    href="/"
                    className={`mr-5 flex h-[30px] shrink-0 items-center justify-center rounded-[5px] px-4 text-[11px] font-bold tracking-wide transition-all duration-200 ${
                        isHomeActive
                            ? "bg-[#EB4124] text-white shadow-[4px_4px_9px_rgba(48,47,47,0.22),-2px_-2px_5px_rgba(255,255,255,0.90)]"
                            : "bg-[#302F2F] text-white shadow-[3px_3px_7px_rgba(48,47,47,0.18)] hover:-translate-y-[1px] hover:bg-[#EB4124] hover:shadow-[4px_4px_9px_rgba(48,47,47,0.22)]"
                    }`}
                >
                    Home
                </Link>

                {/* CATEGORIES */}

                <div className="flex h-full items-center gap-1.5">
                    {categories.map((category) => {
                        const active = isCategoryActive(category.slug);

                        return (
                            <Link
                                key={category.slug}
                                href={`/${category.slug}`}
                                className={`relative flex h-[30px] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-[5px] px-3 text-[11px] font-semibold transition-all duration-200 ${
                                    active
                                        ? "bg-[#EB4124] text-white shadow-[4px_4px_9px_rgba(48,47,47,0.22),-2px_-2px_5px_rgba(255,255,255,0.90)]"
                                        : "text-[#302F2F]/80 hover:-translate-y-[1px] hover:bg-[#FFFDF8] hover:text-[#EB4124] hover:shadow-[4px_4px_8px_rgba(48,47,47,0.16),-2px_-2px_5px_rgba(255,255,255,0.95)]"
                                }`}
                            >
                                {category.name}

                                {active && (
                                    <span className="pointer-events-none absolute bottom-[2px] left-1/2 h-[2px] w-[18px] -translate-x-1/2 rounded-full bg-white" />
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