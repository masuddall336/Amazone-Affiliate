
"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-[calc(100vh-0px)] w-full items-center justify-center bg-[#FFFDF8] px-5 py-16">
            <section className="mx-auto flex w-full max-w-[700px] flex-col items-center text-center">

                {/* 404 */}

                <div className="relative select-none">
                    <span className="text-[110px] font-black leading-none tracking-[-0.08em] text-[#302F2F]/[0.07] sm:text-[160px]">
                        404
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full bg-[#EB4124]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#EB4124]">
                            Page Not Found
                        </span>
                    </div>
                </div>

                {/* TITLE */}

                <h1 className="mt-5 text-2xl font-black tracking-[-0.03em] text-[#302F2F] sm:text-3xl">
                    Looks like you took a wrong turn.
                </h1>

                {/* DESCRIPTION */}

                <p className="mt-3 max-w-[500px] text-sm leading-6 text-[#302F2F]/50">
                    The page you're looking for doesn't exist or may have been
                    moved. Let's get you back to discovering products worth
                    checking out.
                </p>

                {/* ACTIONS */}

                <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">

                    <Link
                        href="/"
                        className="flex h-10 items-center justify-center rounded-[6px] bg-[#302F2F] px-6 text-xs font-bold text-white shadow-[4px_4px_10px_rgba(48,47,47,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#EB4124] hover:shadow-[5px_5px_12px_rgba(48,47,47,0.20)]"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/category/electronics"
                        className="flex h-10 items-center justify-center rounded-[6px] border border-[#302F2F]/10 bg-white px-6 text-xs font-bold text-[#302F2F]/70 shadow-[2px_2px_8px_rgba(48,47,47,0.06)] transition-all duration-200 hover:-translate-y-[1px] hover:border-[#EB4124]/20 hover:text-[#EB4124]"
                    >
                        Explore Products
                    </Link>

                </div>

                {/* BRAND */}

                <div className="mt-12 flex items-center gap-2">
                    <span className="text-sm font-black tracking-[-0.03em] text-[#302F2F]">
                        Amaali<span className="text-[#EB4124]">.</span>
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[#EB4124]" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#302F2F]/35">
                        Smart Shopping
                    </span>
                </div>

            </section>
        </main>
    );
};

export default NotFound;