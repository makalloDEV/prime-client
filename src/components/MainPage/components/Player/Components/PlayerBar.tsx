import { useRef, useState } from "react";
import { PlayerBarButton } from "./PlayerBarButton";

interface PlayerBarProps {
  songTime: number;
}

export default function PlayerBar({ songTime }: PlayerBarProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onMouseEnterHandler = () => {
    setIsHovered(true);
  };

  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };

  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const percentage = (clickPosition / rect.width) * 100;
      // Здесь можно добавить логику обновления songTime
    }
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  return (
    <div className="flex flex-col items-center w-full space-y-4">
      {/* Player Controls */}
      <div className="flex items-center justify-center space-x-6">
        <PlayerBarButton
          type="mix-button"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          d="M3 16L7 20M7 20L11 16M7 20V4M21 8L17 4M17 4L13 8M17 4V20"
          stroke="#8D8C96"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hover:scale-110 hover:stroke-gray-300 transition-transform duration-200"
        />

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

        <button className="hover:cursor-pointer group relative p-2 rounded-full bg-white hover:scale-105 transition-transform duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
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
        </button>

        <PlayerBarButton
          type="next-button"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          d="M7 23.3333V4.66663M11.6667 23.3333L23.3333 14L11.6667 4.66663V23.3333Z"
          stroke="#8D8C96"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hover:scale-110 hover:stroke-gray-300 transition-transform duration-200"
        />

        <button
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          className="p-1 rounded-full hover:scale-110 transition-all duration-200 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="hover:stroke-gray-300 transition-colors duration-200"
          >
            <g clipPath="url(#clip0_136_223)">
              <path
                d="M21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.48395 3.00947 7.06897 3.99122 5.26 5.74L3 8M3 8V3M3 8H8M3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21C14.516 20.9905 16.931 20.0088 18.74 18.26L21 16M21 16H16M21 16V21"
                stroke={isHovered ? "#CCCCCC" : "#8D8C96"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_136_223">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      {songTime && (
        <div
          className="relative w-full max-w-md h-4 flex items-center cursor-pointer"
          onClick={handleProgressClick}
          ref={progressRef}
        >
          {/* Фон прогресс-бара */}
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            {/* Заполненная часть */}
            <div
              className="bg-gray-600 h-1.5 rounded-full relative"
              style={{ width: `${(songTime / 91) * 100}%` }}
            >
              {/* Круг-ползунок */}
              <div
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2
                  w-3 h-3 bg-gray-600 rounded-full shadow-md ${
                    isDragging ? "scale-125" : ""
                  }
                  transition-transform duration-100`}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
