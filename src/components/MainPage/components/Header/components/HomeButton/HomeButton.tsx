import { HomeIconSvg } from "@/assets/svg/HomeIconSvg";
import React from "react";

export function HomeButton() {
  return (
    <button className="bg-zinc-800 p-2 rounded-full mr-2">
      <HomeIconSvg></HomeIconSvg>
    </button>
  );
}
