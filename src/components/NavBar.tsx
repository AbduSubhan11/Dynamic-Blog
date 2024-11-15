"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function NavBar() {
  const pathName = usePathname();
  const [isHamburger, setIsHamburger] = useState(false);

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };

  const closeMenu = () => {
    setIsHamburger(false);
  };

  return (
    <nav className="bg-whit bg-[#14213d] text-[#3A414E text-[#e5e5e5] flex justify-between items-center  px-5 py-6 sticky top-0">
      <div className="font-extrabold font-serif text-2xl">
        Stories That Matter
      </div>
      <div
        className={`md:space-x-4 text-xl ${
          isHamburger
            ? "fixed flex flex-col bg-white right-0 top-0 h-screen w-52 px-10 py-32 space-y-5 text-2xl"
            : "lg:flex hidden"
        }`}
      >
        <Link
          href={"/"}
          className={`font-bold ${pathName == "/" ? "text-[#FF9907]" : ""} ${
            isHamburger ? "border-b-2" : ""
          }`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          href={"/blogs"}
          className={`font-bold ${
            pathName == "/blogs" ? "text-[#FF9907]" : ""
          } ${isHamburger ? "border-b-2" : ""}`}
          onClick={closeMenu}
        >
          Blog
        </Link>
        <Link
          href={"/info"}
          className={`font-bold ${pathName == "/info" ? "text-[#FF9907]" : ""} ${
            isHamburger ? "border-b-2" : ""
          }`}
          onClick={closeMenu}
        >
          Info
        </Link>
      </div>
      <div
        className={` items-center md:space-x-4 space-x-2 ${
          isHamburger ? "fixed flex right-20 top-80" : "md:flex hidden"
        }`}
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          stroke-="round"
          strokeLinejoin="round"
        >
          {" "}
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="black"
          stroke="currentColor"
          strokeWidth="2"
          stroke-="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      </div>
      {/* HAMBURGER */}
      <div className="lg:hidden z-20">
        <button
          className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
          onClick={hamburHandler}
        >
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-opacity duration-300 ease-in-out ${
              isHamburger ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isHamburger ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
