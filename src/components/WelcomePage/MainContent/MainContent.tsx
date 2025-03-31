import MusicSection from "./components/MusicSection/MusicSection";
import musicJson from "../../../assets/dataSet/Music/music.json";
import { JsonDataType, Data } from "../../../types";
import "./MainContent.css";

interface MainContentProps {
  artist: keyof Data;
}

function MainContent({ artist }: MainContentProps) {
  const musicData = musicJson[0] as JsonDataType[number];
  const albums = musicData[artist][0].albums;
  const songs = musicData[artist][0].songs;

  return (
    <div className="main-content">
      <MusicSection
        images={albums}
        type="albums"
      />
      <MusicSection
        images={songs}
        type="songs"
      />
    </div>
  );
}

export default MainContent;
