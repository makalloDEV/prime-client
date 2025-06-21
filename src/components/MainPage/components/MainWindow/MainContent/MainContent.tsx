import { useEffect, useState } from "react";
import { IResponseSongData } from "@/types";
import { SongService } from "@/services/song.service";
import { useDispatch, useSelector } from "react-redux";
import { setTrack } from "@/store/player/player.slice";
import { RootState } from "@/store/store";
import { Search } from "../../Header/components/Search/Search";

function MainContent() {
  const dispatch = useDispatch();

  const { searchQuery } = useSelector((state: RootState) => state.search);
  const [songs, setSongs] = useState<IResponseSongData[]>([]);

  useEffect(() => {
    async function getCollection() {
      const AllSongs = await SongService.getAllSongs();
      setSongs(AllSongs);
    }
    getCollection();
  }, []);

  // Фильтрация песен по поисковому запросу
  const filteredSongs = songs.filter(
    (song) =>
      !searchQuery ||
      song.title.toLowerCase().includes(searchQuery) ||
      (song.createdBy && song.createdBy.toLowerCase().includes(searchQuery))
  );

  return (
    <div className="w-full overflow-hidden bg-zinc-900">
      {/* Header with Search */}
      <div className="flex place-content-between items-center p-4 bg-zinc-800">
        <h3 className="text-xl font-bold text-white">Songs</h3>
      </div>

      {/* Songs List */}
      <div className="max-h-[480px] overflow-y-auto">
        {filteredSongs.map((song) => (
          <div
            key={song.id}
            className="p-4 border-b border-zinc-700 hover:bg-zinc-950 transition-colors cursor-pointer"
            onClick={() =>
              dispatch(
                setTrack({
                  id: song.id,
                  title: song.title,
                  createdBy: song.createdBy,
                })
              )
            }
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img
                  src={`http://localhost:3000/song/${song.id}/image`}
                  alt="Cover"
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div className="text-left">
                  <p className="font-medium text-white">
                    {song.title || "Name of song"}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {song.createdBy || "Singer:"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
