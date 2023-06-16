import Image from "next/image";
import entrepreneur from "../assets/happy_business_man.png";
import avatars from "../assets/avatars.png";
import React, { FC } from "react";

const HeroContent: FC = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {/* hero headline */}
      <h1 className="text-3xl font-bold w-full md:text-5xl md:text-center lg:text-start">
        Unleash the Power of TikTok and{" "}
        <span className="gradient">Transform Your Brand's Destiny</span>
      </h1>
      {/* subhero paragraph */}
      <p className="text-md w-full md:text-center lg:text-start">
        Experience extraordinary growth, authentic connections, and unmatched
        influence with Sky Ads. Our expert team will guide you towards TikTok
        success, helping you make your dreams a reality.
      </p>

      <div className="flex flex-col justify-center items-center lg:flex-row ">
        {/* button */}
        <div className="w-full">
          <button
            aria-label="book a call now button"
            className="capitalize w-full py-2 bg-[#D357FF] text-center font-semibold rounded-md md:py-5"
          >
            book a call now! - it&apos;s free
          </button>
        </div>

        <div className="flex flex-row gap-4 my-2 md:flex-col md:gap-1">
          {/* avatars image */}
          <div className="imageWrapper">
            <Image
              src={avatars}
              alt="people who have used our tiktok ads services"
              priority
              style={{ objectFit: "contain" }}
              fill
              quality={100}
              sizes="(max-width: 640px) 15vw"
            />
          </div>
          <div className="text-wrapper">
            {/* proof text */}
            <h4 className="text-sm">
              more than 100 entrepreneurs have partnered with us!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Herosection: FC = () => {
  return (
    <section className="md:flex items-center justify-center mx-auto">
      <div className="flex flex-col justify-center items-center mx-auto gap-4 my-10 md:my-16 md:max-w-[560px]">
        <div className="lg:flex flex-row">
          <HeroContent />
          {/* entrepreneur image */}
          <div className="relative w-full max-w-[420px] aspect-square">
            <Image
              src={entrepreneur}
              alt="happy entrepreneur with our tiktok ads services"
              priority
              fill
              style={{ objectFit: "contain", zIndex: -1 }}
              quality={100}
              sizes="(max-width: 640px) 30vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
