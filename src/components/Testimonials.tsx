import Image from "next/image";
import john from "../assets/john.png";
import mary from "../assets/mary.png";
import xander from "../assets/xander.png";
import React, { FC } from "react";

const Testimonials: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
      {/* first testimonial container */}
      <div className=" flex flex-col items-center justify-center rounded-lg  gradient-border">
        <p className="italic text-base">
          &ldquo;Working with Sky Ads was a game-changer for our business. Their
          expertise in TikTok advertising helped us reach a wider audience and
          generate remarkable growth. We saw an immediate boost in sales and
          couldn&apos;t be happier with the results. Their team is highly
          professional and dedicated to our success. We highly recommend Sky Ads
          to anyone looking to take their TikTok marketing to the next
          level&ldquo;
        </p>
        <div className="flex flex-row gap-2 items-center">
          <Image
            src={xander}
            alt="first testimonial of our tiktok services"
            height={50}
            quality={100}
            width={50}
            style={{ borderRadius: "50%" }}
          />
          <h3 className="text-sm capitalize">xander, founder of XYZ</h3>
        </div>
      </div>
      {/* second testimonial container */}
      <div className="flex flex-col items-center justify-center rounded-lg  gradient-border">
        <p className="italic text-base">
          &ldquo;I was skeptical about TikTok advertising, but Sky Ads proved me
          wrong. Their personalized strategies and cost-effective solutions
          allowed us to see a significant return on our investment. The
          transparency in reporting and analytics helped us understand the
          impact of our campaigns. With their guidance, we achieved exceptional
          ROI and witnessed our brand gaining traction on TikTok. Thank you, Sky
          Ads, for delivering such impressive results!&ldquo;
        </p>

        <div className="flex flex-row items-center gap-2">
          <Image
            src={mary}
            alt="second testimonial of our tiktok services"
            height={50}
            quality={100}
            width={50}
            style={{ borderRadius: "50%" }}
          />

          <h3 className="capitalize text-sm">Mary, founder of XYZ</h3>
        </div>
      </div>
      {/* third testimonial container */}
      <div className="flex flex-col items-center justify-center rounded-lg  gradient-border">
        <p className="italic text-base">
          &ldquo;Sky Ads has been a valuable partner for our brand. Their deep
          understanding of TikTok and dedication to our success has exceeded our
          expectations. Their personalized approach ensured that our campaigns
          aligned perfectly with our brand identity, resulting in exceptional
          engagement and increased sales. The team&apos;s support and guidance
          throughout the process made the entire experience seamless. We highly
          recommend Sky Ads to any business looking to unlock the power of
          TikTok.&ldquo;
        </p>
        <div className="flex flex-row gap-2 items-center">
          <Image
            src={john}
            alt="third client testimonial"
            height={50}
            width={50}
            quality={100}
            style={{ borderRadius: "50%" }}
          />
          <h3 className="text-sm capitalize">John, founder of XYZ</h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
