import { ProfileIconSvg } from "@/assets/svg/ProfileIConSvg";
import { LogOut, Music, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="bg-zinc-800 p-2 rounded-full outline-none mr-3 hover:cursor-pointer hover:border-white hover:border hover:scale-105 transition-transform duration-200">
          <ProfileIconSvg></ProfileIconSvg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black text-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            className="hover:cursor-pointer"
          >
            <Link to="profile">
              <User />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="hover:cursor-pointer"
          >
            <Link to="uploader">
              <Music />
              <span>Song Uploader</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cursor-pointer">
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
