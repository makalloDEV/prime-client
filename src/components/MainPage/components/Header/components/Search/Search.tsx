import { SearchIconSvg } from "@/assets/svg/SearchIconSvg";

export function Search() {
  return (
    <div className="relative flex items-center">
      <SearchIconSvg></SearchIconSvg>
      <input
        className="bg-zinc-800 text-white placeholder-gray-500 pl-10 pr-10 focus:outline-nonebg-zinc-800 h-12 w-100 rounded-4xl"
        type="text"
      />
    </div>
  );
}
