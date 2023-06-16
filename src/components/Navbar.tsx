import React, { FC, useState } from "react";
import logo from "../assets/Logo.svg";
import navdata from "../../public/nav-data.json";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

interface NavbarTypes {
  title: string;
  url: string;
}

const Navbar: FC = () => {
  return (
    <header>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center mx-auto lg:mt-4 md:mt-6">
        <Image
          src={logo}
          alt="SkyAds brand logo"
          priority
          style={{ objectFit: "contain" }}
          quality={100}
          width={176}
          height={30}
        />

        <ul className="flex flex-row gap-4">
          {navdata.map((link: NavbarTypes, index: number) => (
            <li
              key={index}
              className="capitalize transition ease-in-out delay-400 hover:text-[#D357FF]"
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <button className="text-md px-4 py-2 border-2 border-purple-500 outline-none bg-transparent rounded-md relative overflow-hidden custom-button">
          Contact Us
        </button>
      </nav>

      {/* Mobile Navbar */}
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
