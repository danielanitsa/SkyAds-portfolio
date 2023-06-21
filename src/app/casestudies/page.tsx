import React, { FC } from "react";

const page: FC = () => {
  return (
    <main className="flex flex-col gap-8  items-center justify-center my-12 lg:my-0 lg:h-screen">
      <h1 className="text-3xl underline font-bold text-center lg:text-5xl lg:w-3/4">
        SkyAds Boosts Brand Awareness and Drives Explosive Growth with TikTok
        Ads - Watch Now!
      </h1>
      <div className="relative w-full max-w-[350px] aspect-video lg:max-w-[50%]">
        <video
          src="https://res.cloudinary.com/dfslx8g4k/video/upload/v1687268242/skyads/y2mate.com_-_Rick_Roll_Different_link_no_ads_360p_1_zvagzz.mp4"
          autoPlay
          controls
          width={"100%"}
          height={"auto"}
        ></video>
      </div>
    </main>
  );
};

export default page;
