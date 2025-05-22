import "../Header/Header.css";
import { HomeButton } from "./components/HomeButton/HomeButton";
import { Profile } from "./components/Profile/Profile";
import { Search } from "./components/Search/Search";

export function Header() {
  return (
    <div className="header">
      <div className="ml-3">
        <h1 className="text-zinc-400 ">PRIME</h1>
      </div>

      <div className="search-section ">
        <HomeButton></HomeButton>
        <Search></Search>
      </div>

      <Profile></Profile>
    </div>
  );
}
