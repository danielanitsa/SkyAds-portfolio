import React, { FC } from "react";

const CTASection: FC = () => {
  return (
    <div className="w-full bg-[#0E0E0F] rounded-md flex items-center justify-center px-4 flex-col space-y-8 py-16 my-12">
      <h1 className="uppercase text-4xl  text-center font-bold">
        SHAPE THE FUTURE OF YOUR BUSINESS NOW!!!!
      </h1>
      <button
        className="px-4 bg-[#D357FF] text-center border-2 border-[#7F57FF] font-semibold uppercase py-3 rounded-md  md:py-6 lg:px-6"
        aria-label="book a call now button"
      >
        book a call now! - it&apos;s free
      </button>
    </div>
  );
};

export default CTASection;
