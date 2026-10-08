
"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
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

    return (
        <footer className="w-full bg-[#FFFDF8] text-[#302F2F]">
            <div className="mx-auto w-full max-w-[1580px] px-5 py-9 sm:px-7 lg:px-10">

                {/* MAIN FOOTER */}

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {/* BRAND */}

                    <div>
                        <Link
                            href="/"
                            className="inline-block text-xl font-black tracking-[-0.04em] text-[#302F2F] transition-colors duration-200 hover:text-[#EB4124]"
                        >
                            Amaali<span className="text-[#EB4124]">.</span>
                        </Link>

                        <p className="mt-3 max-w-[280px] text-xs leading-5 text-[#302F2F]/50">
                            Discover useful products, compare options, and find
                            products worth buying through carefully selected
                            recommendations.
                        </p>

                        <div className="mt-3 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#EB4124]" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#302F2F]/40">
                                Smart Shopping
                            </span>
                        </div>
                    </div>

                    {/* CATEGORIES */}

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#302F2F]">
                            Categories
                        </h3>

                        <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2">
                            {categories.map((category) => (
                                <Link
                                    key={category.slug}
                                    href={`/category/${category.slug}`}
                                    className="text-xs text-[#302F2F]/50 transition-colors duration-200 hover:text-[#EB4124]"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#302F2F]">
                            Quick Links
                        </h3>

                        <div className="mt-3 flex flex-col gap-2">
                            <Link
                                href="/"
                                className="w-fit text-xs text-[#302F2F]/50 transition-colors duration-200 hover:text-[#EB4124]"
                            >
                                Home
                            </Link>

                            <Link
                                href="/about"
                                className="w-fit text-xs text-[#302F2F]/50 transition-colors duration-200 hover:text-[#EB4124]"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/contact"
                                className="w-fit text-xs text-[#302F2F]/50 transition-colors duration-200 hover:text-[#EB4124]"
                            >
                                Contact
                            </Link>

                            <Link
                                href="/privacy-policy"
                                className="w-fit text-xs text-[#302F2F]/50 transition-colors duration-200 hover:text-[#EB4124]"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="w-fit text-xs text-[#302F2F]/50 transition-colors duration-200 hover:text-[#EB4124]"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>

                    {/* AFFILIATE DISCLOSURE */}

                    <div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#302F2F]">
                            Affiliate Disclosure
                        </h3>

                        <p className="mt-3 text-xs leading-5 text-[#302F2F]/50">
                            Amaali participates in affiliate programs,
                            including the Amazon Associates Program. As an
                            Amazon Associate, we may earn from qualifying
                            purchases made through links on our website.
                        </p>

                        <Link
                            href="/affiliate-disclosure"
                            className="mt-3 inline-flex items-center text-xs font-bold text-[#EB4124] transition-all duration-200 hover:translate-x-1"
                        >
                            Read full disclosure
                            <span className="ml-1.5">→</span>
                        </Link>
                    </div>
                </div>

                {/* DIVIDER */}

                <div className="my-7 h-px w-full bg-[#302F2F]/8" />

                {/* BOTTOM */}

                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

                    <p className="text-[10px] text-[#302F2F]/40">
                        © 2026 Amaali. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/privacy-policy"
                            className="text-[10px] text-[#302F2F]/40 transition-colors hover:text-[#EB4124]"
                        >
                            Privacy
                        </Link>

                        <span className="h-3 w-px bg-[#302F2F]/10" />

                        <Link
                            href="/terms"
                            className="text-[10px] text-[#302F2F]/40 transition-colors hover:text-[#EB4124]"
                        >
                            Terms
                        </Link>

                        <span className="h-3 w-px bg-[#302F2F]/10" />

                        <Link
                            href="/affiliate-disclosure"
                            className="text-[10px] text-[#302F2F]/40 transition-colors hover:text-[#EB4124]"
                        >
                            Affiliate Disclosure
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;