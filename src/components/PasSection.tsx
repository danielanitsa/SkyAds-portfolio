import React, { FC } from "react";
import Video from "./Video";

const PasSection: FC = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-6 ">
        <Video />
        <div className="flex flex-col gap-4  w-full  lg:max-w-[70%]">
          <h1 className="text-2xl font-bold">
            Are You Struggling to Scale Your Business? Feeling Frustrated with
            Ineffective Ads?
          </h1>
          <p className="text-sm lg:text-base">
            Imagine the disappointment of watching your competitors soar ahead
            while your business remains stagnant. It&apos;s disheartening to see
            your hard-earned money go down the drain without any significant
            returns. You&apos;re tired of wasting resources and missing out on
            potential growth opportunities. It&apos;s time for a change.
          </p>
          <p className="text-sm lg:text-base">
            That&apos;s where we come in. Sky Ads offers a transformative
            solution to help you scale your business effectively and
            efficiently. Unlike other agencies that charge exorbitant fees, we
            provide affordable options tailored to your specific needs. With our
            expertise, you can finally achieve the growth and success
            you&apos;ve been striving for.
          </p>
        </div>
      </section>
    </>
  );
};

export default PasSection;
