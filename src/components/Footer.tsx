import React, { FC } from "react";
import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/Logo.svg";
import navdata from "../../public/nav-data.json";
import Image from "next/image";
import Link from "next/link";

interface NavbarTypes {
  title: string;
  url: string;
}

const Footer: FC = () => {
  return (
    <footer className="py-8 bg-[#0E0E0F]">
      <div className="container mx-auto px-4 gap-4  flex flex-col md:flex-row items-center justify-between lg:gap-0">
        <div className="flex items-center justify-center  md:mb-0">
          <Image
            src={logo}
            alt="SkyAds brand logo"
            priority
            style={{ objectFit: "contain" }}
            quality={100}
            width={176}
            height={30}
          />
        </div>

        <ul className="flex flex-col gap-3 md:flex-row justify-center items-center">
          {navdata.map((link: NavbarTypes, index: number) => (
            <li
              key={index}
              className="capitalize text-lg transition ease-in-out delay-400 hover:text-[#D357FF] mx-2 md:mx-4"
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-2  md:mt-0">
          <a
            href="#"
            aria-label="follow us on instagram"
            className="text-gray-300 hover:text-white"
          >
            <Instagram size={28} />
          </a>
          <a
            href="#"
            aria-label="follow us on facebook"
            className="text-gray-300 hover:text-white"
          >
            <Facebook size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
