import React from "react";
import { Link } from "react-router-dom";

interface SumbitButtonProps {
  isSuccess: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function SumbitButton({ children, className }: SumbitButtonProps) {
  return (
    <div className="mt-4">
      <button
        className={`w-full py-2 text-sm bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors font-medium hover:cursor-pointer ${className}`}
      >
        {children}
      </button>
    </div>
  );
}

export default SumbitButton;
