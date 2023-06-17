"use client";

import React, { FC, useState } from "react";
import { MenuIcon, X } from "lucide-react";
import logo from "../assets/Logo.svg";
import navdata from "../../public/nav-data.json";
import Image from "next/image";
import Link from "next/link";

interface NavbarTypes {
  title: string;
  url: string;
}

const MobileNavbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-6 md:hidden z-10">
        <Image
          src={logo}
          alt="SkyAds brand logo"
          height={30}
          width={130}
          priority
          quality={100}
        />

        <button
          className="text-md px-4 py-2 border-2 border-purple-500 outline-none bg-transparent rounded-md relative overflow-hidden"
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label="open nav menu on mobile"
        >
          {showMenu ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>
      <div
        className={`transition-opacity duration-500 z-50  ${
          showMenu ? "opacity-100" : "opacity-0"
        }`}
      >
        {showMenu && (
          <div className="fixed top-[70%] left-0 right-0 bottom-0 bg-[#0E0E0F] ">
            <div className="py-6">
              <ul className="flex flex-col items-center gap-4">
                {navdata.map((link: NavbarTypes, index: number) => (
                  <li
                    key={index}
                    className="capitalize transition ease-in-out delay-400 hover:text-[#D357FF]"
                  >
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
                <button className="text-md px-4 py-2 border-2 border-purple-500 outline-none bg-transparent rounded-md relative overflow-hidden custom-button">
                  Contact Us
                </button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNavbar;
