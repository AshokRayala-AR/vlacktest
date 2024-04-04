import { useState, useRef } from "react";
import {
  AudioPlayerProps,
  HTMLAudioElementExtended,
} from "../../../../utils/types/Types";
const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElementExtended>(null);
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
        className="lg:w-20 lg:h-20 h-10 w-10 bg-transparent border-2 border-sky-200 rounded-full text-[#93C5FD]"
      >
        tap
      </button>
    </div>
  );
};

export default AudioPlayer;
