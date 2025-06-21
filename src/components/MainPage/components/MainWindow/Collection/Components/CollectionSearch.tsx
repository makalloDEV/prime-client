import { SearchIconSvg } from "@/assets/svg/SearchIconSvg";

interface CollectionSearchProps {
  className: string;
  searchRef?: React.RefObject<HTMLInputElement>;
}

function CollectionSearch({ searchRef }: CollectionSearchProps) {
  return (
    <div className="relative flex items-center ml-2.5 mt-4">
      <SearchIconSvg></SearchIconSvg>
      <input
        className="bg-zinc-800 text-white placeholder-gray-500 pl-10 pr-10 focus:outline-nonebg-zinc-800 h-10 w-50 rounded-4xl hover:border-white hover:border transition-transform duration-200"
        type="text"
        ref={searchRef}
      />
    </div>
  );
}

export default CollectionSearch;
