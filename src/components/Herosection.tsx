import Image from "next/image";
import entrepreneur from "../assets/happy_business_man.png";
import avatars from "../assets/avatars.png";
import React, { FC } from "react";

const HeroContent: FC = () => {
  return (
    <div className="space-y-3 flex flex-col lg:max-w-[600px] md:max-w-[80%] ">
      <h1 className="capitalize text-3xl font-extrabold lg:text-5xl">
        Unleash the Power of TikTok and{" "}
        <span className="gradient">Transform Your Brand&apos;s Destiny</span>
      </h1>
      <p className="text-base  w-full md:text-lg">
        Experience extraordinary growth, authentic connections, and unmatched
        influence with Sky Ads. Our expert team will guide you towards TikTok
        success, helping you make your dreams a reality.
      </p>
      <div className="space-y-3 flex flex-col md:flex-row space-x-4 md:items-center ">
        {/* first container */}
        <button
          className="w-full bg-[#D357FF] text-center uppercase py-3 rounded-md  md:py-6 "
          aria-label="book a call now button"
        >
          book a call now! - it&apos;s free
        </button>
        {/* second container */}
        <div className="flex flex-row gap-4  md:flex-col md:gap-1 ">
          {/* image container -- avatars */}
          <div className="imageWrapper lg:max-w-[150px] ">
            <Image
              src={avatars}
              alt="people who have tried our tiktok ads services"
              fill
              priority
              quality={100}
              style={{ objectFit: "contain", zIndex: "-1" }}
              sizes="(max-width: 640px) 15vw, (min-width: 1024px) 20vw"
            />
          </div>
          <h4 className="text-sm">
            more than 100 entrepreneurs partnered with us!
          </h4>
        </div>
      </div>
    </div>
  );
};

const Herosection: FC = () => {
  return (
    <main className="flex items-center justify-center flex-col mx-auto my-12 lg:flex-row space-x-6">
      <HeroContent />
      <div className="relative w-full max-w-[420px] aspect-square my-6 lg:max-w-[650px]   lg:my-0">
        <Image
          src={entrepreneur}
          alt="happy entrepreneur with our tiktok ads services"
          style={{ objectFit: "contain" }}
          quality={100}
          sizes="(max-width: 640px) 30vw, (min-width: 1024px) 30vw"
          fill
          priority
          className="-z-50"
        />
      </div>
    </main>
  );
};

export default Herosection;
