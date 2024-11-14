// import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="py-10 bg-[#141B25] text-white">
      <div className="grid  md:grid-cols-3 grid-cols-1 md:px-20 px-2 sm:space-y-0 space-y-16">
        {/* 1ST */}
        <div className="space-y-8 flex flex-col md:items-start items-center md:text-left text-center">
          <img
            src={"/Image/pic.jfif"}
            alt="Footer Image"
            // width={100}
            // height={100}
            className="rounded-full md:w-28 w-20 md:h-28 h-20"
          />
          <p>
            Welcome to our site, we explore topics e.g., tech trends, lifestyle
            tips, personal growth, etc. Whether you&apos;re here for insightful
            articles or thought-provoking discussions, we&apos;re glad to have you.
          </p>
          {/* SOCIAL ICONS */}
          <div className="flex items-center space-x-4">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </div>
        </div>

        {/* 2ND */}
        <div className=" space-y-10">
          <h1 className="text-center font-bold text-2xl">Info</h1>
          <div className="flex flex-col justify-center items-center space-y-5">
            <Link href={"/"} className="flex items-center space-x-2">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="hover:text-[#FF9907]">Home</span>
            </Link>
            <Link href={"/blogs"} className="flex items-center space-x-2">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="hover:text-[#FF9907]">Blogs</span>
            </Link>
            <Link href={"/info"} className="flex items-center space-x-2">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span className="hover:text-[#FF9907]">Contact</span>
            </Link>
          </div>
        </div>

        {/* 3RD */}
        <div className="flex justify-center items-center sm:text-1xl text-[15px]">
          <p>Developed by <span className="text-[#FF9907]">Abdu Subhan</span> | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
