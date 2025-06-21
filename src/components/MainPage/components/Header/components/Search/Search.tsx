import { SearchIconSvg } from "@/assets/svg/SearchIconSvg";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/search/search.slice";

export function Search() {
  const dispatch = useDispatch();

  return (
    <div className="relative flex items-center">
      <SearchIconSvg />
      <input
        className="bg-zinc-800 text-white placeholder-gray-500 pl-10 pr-10 focus:outline-nonebg-zinc-800 h-12 w-100 rounded-4xl hover:border-white hover:border  transition-transform duration-200"
        type="text"
        placeholder="Search songs..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
}
