import PlayerBar from "./Components/PlayerBar";
import PlayerInfo from "./Components/PlayerInfo";
import PlayerVolume from "./Components/PlayerVolume";

export function Player() {
  return (
    <div className="player-content-container mt-3 flex items-center justify-between px-4">
      <PlayerInfo
        img="img"
        songAuthor="makallo"
        songTitle="Osadki"
      ></PlayerInfo>

      <PlayerBar songTime={12}></PlayerBar>

      <PlayerVolume></PlayerVolume>
    </div>
  );
}
