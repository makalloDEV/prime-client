import { HomeIconSvg } from "@/assets/svg/HomeIconSvg";
import React from "react";
import { Link } from "react-router-dom";

export function HomeButton() {
  return (
    <>
      <Link to="http://localhost:3001/main">
        <button className="bg-zinc-800 p-2 rounded-full mr-2 hover:cursor-pointer hover:border-white hover:border hover:scale-105 transition-transform duration-200">
          <HomeIconSvg></HomeIconSvg>
        </button>
      </Link>
    </>
  );
}
