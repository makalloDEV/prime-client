import { useEffect, useRef, useState } from "react";
import { PlayerBarButton } from "./PlayerBarButton";
import { useDispatch, useSelector } from "react-redux";
import { togglePlay } from "@/store/player/player.slice";

interface Track {
  id: number;
  title: string;
  artist: string;
}

export default function PlayerBar() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const dispatch = useDispatch();
  const { isPlaying, currentTrack, volume } = useSelector(
    (state: any) => state.player
  );
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  // Инициализация аудио
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      dispatch(togglePlay());
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
      audio.pause();
    };
  }, [dispatch]);

  // Обновление трека
  useEffect(() => {
    if (!currentTrack) return;

    const audio = audioRef.current;
    audio.src = `http://localhost:3000/song/${currentTrack.id}/audio`;
    audio.load();

    if (isPlaying) {
      audio.play().catch((err) => console.error("Play error:", err));
    }
  }, [currentTrack]);

  // Обновление громкости
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // Обработка play/pause
  useEffect(() => {
    if (!currentTrack) return;

    const audio = audioRef.current;
    if (isPlaying) {
      audio.play().catch((err) => console.error("Play error:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  const handlePlayPause = () => {
    if (!currentTrack) return;
    dispatch(togglePlay());
  };

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="flex flex-col items-center w-full space-y-4">
      {/* Кнопки управления */}
      <div className="flex items-center justify-center space-x-6">
        <PlayerBarButton
          type="back-button"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          d="M20.9998 23.3334V4.66669M16.3332 23.3334L4.6665 14L16.3332 4.66669V23.3334Z"
          stroke="#8D8C96"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hover:scale-110 hover:stroke-gray-300 transition-transform duration-200"
        />

        <button
          className="hover:cursor-pointer group relative p-2 rounded-full bg-white transition-transform duration-200 text-center"
          onClick={handlePlayPause}
        >
          {!isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 27"
              fill="black"
              className="group-hover:stroke-gray-600 transition-colors duration-200"
            >
              <path
                d="M6.75 3.375L22.5 13.5L6.75 23.625V3.375Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              className="group-hover:stroke-gray-600 transition-colors duration-200"
            >
              <path
                d="M17 4H15C14.4477 4 14 4.44772 14 5V19C14 19.5523 14.4477 20 15 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 4H7C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H9C9.55228 20 10 19.5523 10 19V5C10 4.44772 9.55228 4 9 4Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <PlayerBarButton
          type="next-button"
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          d="M7 23.3333V4.66663M11.6667 23.3333L23.3333 14L11.6667 4.66663V23.3333Z"
          stroke="#8D8C96"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hover:scale-110 hover:stroke-gray-300 transition-transform duration-200"
        />
      </div>

      {/* Прогресс-бар (только отображение) */}
      <div className="w-full max-w-md flex items-center">
        <div className="text-white text-xs mr-3">{formatTime(currentTime)}</div>
        <div className="w-full bg-gray-600 rounded-full h-1.5">
          <div
            className="bg-gray-300 h-1.5 rounded-full"
            style={{
              width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
            }}
          />
        </div>
        <div className="text-white text-xs ml-3">{formatTime(duration)}</div>
      </div>
    </div>
  );
}
