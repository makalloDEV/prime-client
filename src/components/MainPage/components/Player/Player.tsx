import { useDispatch, useSelector } from "react-redux";
import PlayerBar from "./Components/PlayerBar";
import PlayerInfo from "./Components/PlayerInfo";
import PlayerVolume from "./Components/PlayerVolume";

export function Player() {
  const dispatch = useDispatch();
  const { queue } = useSelector((state: any) => state.player);
  const { currentTrack } = useSelector((state: any) => state.player);

  return (
    <div className="player-content-container mt-3 flex items-center justify-between px-4">
      <PlayerInfo
        img={
          currentTrack
            ? `http://localhost:3000/song/${currentTrack.id}}/image`
            : ""
        }
        songAuthor={currentTrack ? currentTrack.createdBy : ""}
        songTitle={currentTrack ? currentTrack.title : ""}
      ></PlayerInfo>

      <PlayerBar></PlayerBar>

      <PlayerVolume></PlayerVolume>
    </div>
  );
}
