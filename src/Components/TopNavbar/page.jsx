
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  LogIn,
  LogOut,
  UserRound,
} from "lucide-react";

import logo from "../../../public/logo/amaali.png";

const TopNavbar = ({ user = null, onLogout = () => {} }) => {
  const neumorphicRaised =
    "bg-[#e8e8e8] shadow-[4px_4px_8px_#c8c8c8,-4px_-4px_8px_#ffffff] transition-all duration-300";

  const neumorphicHover =
    "hover:-translate-y-[1px] hover:text-[#EB4124] hover:shadow-[5px_5px_10px_#c5c5c5,-5px_-5px_10px_#ffffff] active:translate-y-0 active:shadow-[inset_3px_3px_6px_#c8c8c8,inset_-3px_-3px_6px_#ffffff]";

  const searchContainer =
    "flex h-[34px] items-center rounded-full bg-[#e8e8e8] px-3.5 shadow-[inset_3px_3px_6px_#c8c8c8,inset_-3px_-3px_6px_#ffffff] transition-all duration-300 focus-within:shadow-[inset_2px_2px_5px_#c8c8c8,inset_-2px_-2px_5px_#ffffff,0_0_0_2px_rgba(235,65,36,0.12)]";

  const authButton =
    "flex h-[34px] shrink-0 items-center justify-center gap-1.5 rounded-full px-3 text-[11px] font-bold text-[#302F2F] sm:px-3.5";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/70 bg-[#e8e8e8]/95 backdrop-blur-xl">
      {/* TOP NAVBAR */}
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[54px] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-[60px] sm:gap-5 sm:px-6 lg:px-8 xl:px-10"
      >
        {/* LOGO */}
        <div className="flex h-full w-[92px] shrink-0 items-center sm:w-[120px] lg:w-[145px]">
          <Link
            href="/"
            aria-label="Amaali home"
            className="group relative flex h-full w-full items-center"
          >
            <Image
              src={logo}
              alt="Amaali"
              priority
              width={200}
              height={200}
              sizes="(max-width: 640px) 100px, 150px"
              className="pointer-events-none absolute left-0 top-1/2 h-[78px] w-[100px] -translate-y-1/2 object-contain drop-shadow-[0_3px_5px_rgba(48,47,47,0.12)] transition-all duration-300 group-hover:drop-shadow-[0_4px_7px_rgba(48,47,47,0.2)] sm:h-[94px] sm:w-[125px] lg:h-[108px] lg:w-[145px]"
            />
          </Link>
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden min-w-0 flex-1 justify-center sm:flex">
          <form action="/search" method="GET" className="w-full max-w-[540px]">
            <div className={`group ${searchContainer}`}>
              <Search
                size={17}
                aria-hidden="true"
                className="shrink-0 text-[#302F2F]/55 transition-colors group-focus-within:text-[#EB4124]"
              />

              <input
                type="search"
                name="q"
                placeholder="Search products, brands & reviews..."
                autoComplete="off"
                className="ml-2.5 h-full w-full bg-transparent text-xs text-[#302F2F] outline-none placeholder:text-[#302F2F]/45"
              />
            </div>
          </form>
        </div>

        {/* AUTH ACTIONS */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          {!user ? (
            <>
              {/* LOGIN */}
              <Link
                href="/login"
                className={`${authButton} ${neumorphicRaised} ${neumorphicHover}`}
              >
                <LogIn size={15} />
                <span className="hidden sm:inline">Login</span>
              </Link>

              {/* REGISTER */}
              <Link
                href="/register"
                className="flex h-[34px] shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#EB4124] px-3 text-[11px] font-bold text-white shadow-[4px_4px_8px_#c8c8c8,-4px_-4px_8px_#ffffff,inset_1px_1px_2px_rgba(255,180,160,0.4)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#df3d22] hover:shadow-[5px_5px_10px_#c5c5c5,-5px_-5px_10px_#ffffff] active:translate-y-0 active:shadow-[inset_3px_3px_6px_rgba(100,20,10,0.3),inset_-3px_-3px_6px_rgba(255,150,130,0.35)] sm:px-3.5"
              >
                <UserRound size={15} />
                <span className="hidden sm:inline">Join</span>
              </Link>
            </>
          ) : (
            <>
              {/* USER ACCOUNT */}
              <div className="hidden max-w-[170px] items-center gap-2 rounded-full bg-[#e8e8e8] px-2.5 py-1.5 shadow-[inset_3px_3px_6px_#c8c8c8,inset_-3px_-3px_6px_#ffffff] sm:flex">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e8e8e8] text-[#EB4124] shadow-[2px_2px_4px_#c8c8c8,-2px_-2px_4px_#ffffff]">
                  <UserRound size={13} />
                </span>

                <span className="truncate text-[11px] font-bold text-[#302F2F]">
                  {user?.displayName || user?.email || "Account"}
                </span>
              </div>

              {/* LOGOUT */}
              <button
                type="button"
                onClick={onLogout}
                className={`${authButton} ${neumorphicRaised} ${neumorphicHover}`}
              >
                <LogOut size={15} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </nav>

      {/* MOBILE SEARCH */}
      <div className="border-t border-white/70 px-4 pb-2.5 pt-2 sm:hidden">
        <form action="/search" method="GET">
          <div className={searchContainer}>
            <Search
              size={16}
              aria-hidden="true"
              className="shrink-0 text-[#302F2F]/55"
            />

            <input
              type="search"
              name="q"
              placeholder="Search products, brands & reviews..."
              autoComplete="off"
              className="ml-2 h-full w-full bg-transparent text-xs text-[#302F2F] outline-none placeholder:text-[#302F2F]/45"
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default TopNavbar;