import React, { useRef } from "react";
import Video from "../../assets/videos/vlackaudio-3.mp4";
import Logo from "../../assets/images/logoVlack.png";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className=" p-8 md:p-14 flex flex-col lg:flex-row gap-12 justify-center items-center border-none bg-[#fcfffe]">
      <div className="w-full lg:w-3/6">
        <p className="text-6xl leading-68 relative">
          <span
            className="bg-gradient-to-r from-[#111450] to-[#328fb9] text-transparent absolute top-0 left-0 z-10"
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Just be patient to listen to us... 
          </span>
          <span className="text-[#3d41b3]">
            Just be patient to listen to us... 
          </span>
        </p>
      </div>
      <div className="relative w-2/6 flex justify-center">
        <video
          ref={videoRef}
          className="border-none md:w-4/6 w-4/6 bg-slate-400"
          src={Video}
          onClick={togglePlay}
          controls={false}
        />
        <span
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        >
          <img src={Logo} alt="" className="w-10 md:w-16" />
        </span>
      </div>
    </div>
  );
};

export default VideoPlayer;
