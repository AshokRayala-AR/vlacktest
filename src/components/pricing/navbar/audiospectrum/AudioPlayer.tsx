

import { useState, useRef } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-white border-2 border-sky-200 rounded-full text-[#93C5FD]"
      >
        tap
      </button>
    </div>
  );
};

export default AudioPlayer;
