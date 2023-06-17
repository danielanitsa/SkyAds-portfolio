import { FC } from "react";

const Video: FC = () => {
  return (
    <>
      <div className="relative w-full max-w-[380px] aspect-video lg:max-w-[50%]">
        <video autoPlay controls width={"100%"} height={"auto"}>
          <source
            src="https://res.cloudinary.com/dfslx8g4k/video/upload/v1686993525/skyads/stock_video_jihvzl.webm"
            type="video/webm"
            style={{ objectFit: "contain" }}
          />
        </video>
      </div>
    </>
  );
};

export default Video;
