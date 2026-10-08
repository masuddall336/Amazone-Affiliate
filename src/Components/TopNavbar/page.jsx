
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo/amaali.png";

/* =========================================================
   ICON COMPONENTS
========================================================= */

const SearchIcon = ({ size = 19, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <circle
            cx="11"
            cy="11"
            r="7"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M16.5 16.5L21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const LoginIcon = ({ size = 17 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M15 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M10 17L15 12L10 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15 12H3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const LogoutIcon = ({ size = 17 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M9 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M16 17L21 12L16 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M21 12H9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const UserIcon = ({ size = 16 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <circle
            cx="12"
            cy="8"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M4 21C4.8 16.8 7.5 14.5 12 14.5C16.5 14.5 19.2 16.8 20 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

/* =========================================================
   TOP NAVBAR
========================================================= */

const TopNavbar = ({ user = null, onLogout = () => {} }) => {
    return (
        <header className="sticky top-0 z-50 w-full bg-[#FFFDF8]/95 backdrop-blur-xl shadow-[0_2px_14px_rgba(48,47,47,0.10)]">
            <nav className="relative mx-auto flex h-[54px] w-full max-w-[1580px] items-center justify-between px-3 sm:px-5 lg:px-7">

                {/* =================================================
                    LEFT - LOGO
                ================================================== */}

                <div className="relative z-[60] flex h-[54px] w-[145px] shrink-0 items-center overflow-visible sm:w-[165px] lg:w-[180px] pl-5">

                    <Link
                        href="/"
                        aria-label="Amaali Home"
                        className="group relative z-[61] flex h-[54px] w-[145px] items-center justify-start overflow-visible outline-none sm:w-[165px] lg:w-[180px]"
                    >
                        <Image
                            src={logo}
                            alt="Amaali"
                            priority
                            width={300}
                            height={300}
                            sizes="220px"
                            className="pointer-events-none absolute left-[-20px] top-1/2 h-[190px] w-[190px] -translate-y-1/2 object-contain drop-shadow-[0_4px_7px_rgba(48,47,47,0.18)] transition-all duration-300 ease-out group-hover:drop-shadow-[0_6px_11px_rgba(48,47,47,0.28)] sm:left-[-23px] sm:h-[205px] sm:w-[205px] lg:left-[-27px] lg:h-[220px] lg:w-[220px]"
                        />
                    </Link>
                </div>

                {/* =================================================
                    CENTER - DESKTOP SEARCH
                ================================================== */}

                <div className="hidden flex-1 justify-center px-5 sm:flex lg:px-10">
                    <form
                        action="/search"
                        method="GET"
                        className="w-full max-w-[680px]"
                    >
                        <div className="group flex h-[37px] items-center rounded-[5px] bg-[#FFFDF8] px-4 transition-all duration-300 shadow-[inset_3px_3px_7px_rgba(48,47,47,0.15),inset_-3px_-3px_7px_rgba(255,255,255,0.95)] focus-within:shadow-[inset_2px_2px_5px_rgba(48,47,47,0.16),inset_-2px_-2px_5px_rgba(255,255,255,1),0_0_0_2px_rgba(235,65,36,0.10)]">

                            <SearchIcon
                                size={18}
                                className="shrink-0 text-[#302F2F]/55 transition-colors duration-300 group-focus-within:text-[#EB4124]"
                            />

                            <input
                                type="text"
                                name="q"
                                placeholder="Search products, brands & reviews..."
                                autoComplete="off"
                                className="ml-3 h-full w-full bg-transparent text-[13px] text-[#302F2F] outline-none placeholder:text-[#302F2F]/45"
                            />
                        </div>
                    </form>
                </div>

                {/* =================================================
                    RIGHT - AUTH
                ================================================== */}

                <div className="flex shrink-0 items-center gap-2">

                    {!user ? (
                        <>
                            {/* LOGIN */}

                            <Link
                                href="/login"
                                className="group flex h-[36px] items-center gap-2 rounded-[5px] bg-[#FFFDF8] px-4 text-[12px] font-bold tracking-wide text-[#302F2F] transition-all duration-200 shadow-[4px_4px_9px_rgba(48,47,47,0.24),-4px_-4px_9px_rgba(255,255,255,0.98)] hover:-translate-y-[1px] hover:text-[#EB4124] hover:shadow-[6px_6px_12px_rgba(48,47,47,0.28),-5px_-5px_11px_rgba(255,255,255,1)] active:translate-y-[1px] active:shadow-[inset_3px_3px_7px_rgba(48,47,47,0.22),inset_-3px_-3px_7px_rgba(255,255,255,0.98)]"
                            >
                                <LoginIcon size={16} />

                                <span className="hidden sm:inline">
                                    Login
                                </span>
                            </Link>

                            {/* JOIN */}

                            <Link
                                href="/register"
                                className="group flex h-[36px] items-center gap-2 rounded-[5px] bg-[#EB4124] px-4 text-[12px] font-bold tracking-wide text-white transition-all duration-200 shadow-[4px_4px_9px_rgba(48,47,47,0.28),-3px_-3px_7px_rgba(255,255,255,0.90),inset_1px_1px_2px_rgba(255,180,160,0.35),inset_-2px_-2px_3px_rgba(120,20,10,0.22)] hover:-translate-y-[1px] hover:bg-[#DF3D22] hover:shadow-[6px_6px_13px_rgba(48,47,47,0.32),-4px_-4px_9px_rgba(255,255,255,0.98)] active:translate-y-[1px] active:shadow-[inset_3px_3px_7px_rgba(100,20,10,0.32),inset_-3px_-3px_7px_rgba(255,150,130,0.38)]"
                            >
                                <UserIcon size={16} />

                                <span className="hidden sm:inline">
                                    Join
                                </span>
                            </Link>
                        </>
                    ) : (
                        <>
                            {/* USER */}

                            <div className="hidden h-[36px] max-w-[190px] items-center gap-2 rounded-full bg-[#FFFDF8] px-3 sm:flex shadow-[inset_3px_3px_7px_rgba(48,47,47,0.15),inset_-3px_-3px_7px_rgba(255,255,255,0.95),3px_3px_7px_rgba(48,47,47,0.10)]">

                                <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full bg-[#FFFDF8] text-[#EB4124] shadow-[3px_3px_6px_rgba(48,47,47,0.18),-2px_-2px_5px_rgba(255,255,255,0.98)]">
                                    <UserIcon size={14} />
                                </div>

                                <span className="truncate text-[11px] font-bold text-[#302F2F]">
                                    {user?.displayName ||
                                        user?.email ||
                                        "Account"}
                                </span>
                            </div>

                            {/* LOGOUT */}

                            <button
                                type="button"
                                onClick={onLogout}
                                className="group flex h-[36px] items-center gap-2 rounded-full bg-[#FFFDF8] px-4 text-[12px] font-bold tracking-wide text-[#302F2F] transition-all duration-200 shadow-[4px_4px_9px_rgba(48,47,47,0.22),-4px_-4px_9px_rgba(255,255,255,0.98)] hover:-translate-y-[1px] hover:text-[#EB4124] hover:shadow-[6px_6px_12px_rgba(48,47,47,0.28),-5px_-5px_11px_rgba(255,255,255,1)] active:translate-y-[1px] active:shadow-[inset_3px_3px_7px_rgba(48,47,47,0.22),inset_-3px_-3px_7px_rgba(255,255,255,0.98)]"
                            >
                                <LogoutIcon size={16} />

                                <span className="hidden sm:inline">
                                    Logout
                                </span>
                            </button>
                        </>
                    )}
                </div>
            </nav>

            {/* =================================================
                MOBILE SEARCH
            ================================================== */}

            <div className="border-t border-[#302F2F]/5 px-3 pb-2 pt-1 sm:hidden">
                <form action="/search" method="GET">
                    <div className="flex h-[37px] items-center rounded-full bg-[#FFFDF8] px-3 shadow-[inset_3px_3px_7px_rgba(48,47,47,0.15),inset_-3px_-3px_7px_rgba(255,255,255,0.95)]">

                        <SearchIcon
                            size={17}
                            className="shrink-0 text-[#302F2F]/55"
                        />

                        <input
                            type="text"
                            name="q"
                            placeholder="Search products, brands & reviews..."
                            autoComplete="off"
                            className="ml-2 h-full w-full bg-transparent text-[12px] text-[#302F2F] outline-none placeholder:text-[#302F2F]/45"
                        />
                    </div>
                </form>
            </div>
        </header>
    );
};

export default TopNavbar;