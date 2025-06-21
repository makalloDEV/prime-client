import { useState } from "react";

interface PlayerBarButtonProps {
  type: string;
  xmlns: string;
  width: string;
  height: string;
  viewBox: string;
  fill: string;
  d: string;
  stroke: string;
  strokeWidth: string;
  strokeLinecap: string;
  strokeLinejoin: string;
  className?: string;
  onClick?: () => void;
}

export function PlayerBarButton({
  xmlns,
  width,
  height,
  viewBox,
  fill,
  d,
  stroke,
  strokeWidth,
  strokeLinecap,
  strokeLinejoin,
  className,
  onClick,
}: PlayerBarButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const onMouseEnterHandler = () => {
    setIsHovered(true);
  };

  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`hover:cursor-pointer ${className}`}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={onClick}
    >
      <svg
        xmlns={xmlns}
        width={width}
        height={height}
        viewBox={viewBox}
        fill={fill}
      >
        <path
          d={d}
          stroke={isHovered ? "#CCCCCC" : stroke}
          stroke-width={strokeWidth}
          stroke-linecap={strokeLinecap}
          stroke-linejoin={strokeLinejoin}
        />
      </svg>
    </button>
  );
}
