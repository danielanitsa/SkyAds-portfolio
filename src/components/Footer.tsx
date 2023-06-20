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
    <footer className="py-16 flex justify-center items-center  bg-[#0E0E0F] w-full  ">
      <div className="flex gap-4 flex-col justify-center items-center mx-auto lg:flex-row lg:justify-between lg:gap-0 lg:px-10 lg:w-full  lg:mt-4 md:mt-6">
        <Image
          src={logo}
          alt="SkyAds brand logo"
          priority
          style={{ objectFit: "contain" }}
          quality={100}
          width={176}
          height={30}
        />

        <ul className="flex flex-col gap-4 lg:flex-row">
          {navdata.map((link: NavbarTypes, index: number) => (
            <li
              key={index}
              className="capitalize transition ease-in-out delay-400 hover:text-[#D357FF]"
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row gap-2">
          <Instagram size={24} />
          <Facebook size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
