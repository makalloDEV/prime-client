import { ResizablePanel } from "@/components/ui/resizable";
import CollectionButton from "./Components/CollectionButton";
import { useEffect, useRef, useState } from "react";
import CollectionSearch from "./Components/CollectionSearch";
import { IResponseSongData } from "@/types";
import { UserService } from "@/services/user.service";
import { setTrack, wasAddOrRemoveSet } from "@/store/player/player.slice";
import { useDispatch, useSelector } from "react-redux";
import { searchCollection } from "@/store/user/user.slice";
import { SearchIconSvg } from "@/assets/svg/SearchIconSvg";

export function Collection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [songs, setSongs] = useState<IResponseSongData[]>([]);
  const dispatch = useDispatch();
  const { wasAddOrRemove } = useSelector((state: any) => state.player);
  const { search } = useSelector((state: any) => state.user);
  const [searchInput, setSearchInput] = useState<string>("");

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setSongs(searchSongs(e.target.value));
    } else {
      setSongs(search); // потом поменяю имя
    }
  };

  const searchSongs = (value: string) => {
    if (!value.trim()) return songs;

    const lowerValue = value.toLowerCase();

    return songs.filter(
      (song) =>
        song.title?.toLowerCase().includes(lowerValue) ||
        song.createdBy?.toLowerCase().includes(lowerValue)
    );
  };

  useEffect(() => {
    async function getCollection() {
      const songs = await UserService.getSongsFromCollection();
      setSongs(songs);
      dispatch(searchCollection(songs));
    }
    getCollection();
  }, []);

  useEffect(() => {
    async function getCollection() {
      const songs = await UserService.getSongsFromCollection();
      setSongs(songs);
    }
    getCollection();
  }, [wasAddOrRemove]);

  return (
    <ResizablePanel
      className="bg-zinc-900 ml-2 rounded-lg h-140"
      defaultSize={isOpen ? 15 : 5}
      maxSize={isOpen ? 15 : 5}
      minSize={isOpen ? 15 : 5}
    >
      <div className="flex items-center ml-5 mt-5">
        {/* Добавлен flex и items-center */}
        <CollectionButton
          className="cursor-pointer"
          onClick={setIsOpenHandler}
        />
        {isOpen && <p className="text-white ml-8 text-xl ">Collection</p>}
      </div>
      {isOpen && (
        <div className="relative flex items-center ml-2.5 mt-4">
          <SearchIconSvg></SearchIconSvg>
          <input
            className="bg-zinc-800 text-white placeholder-gray-500 pl-10 pr-10 focus:outline-nonebg-zinc-800 h-10 w-50 rounded-4xl hover:border-white hover:border transition-transform duration-200"
            type="text"
            onChange={onChangeSearchHandler}
          />
        </div>
      )}
      {isOpen ? (
        <>
          <div className="max-h-[480px] overflow-y-auto mt-2">
            {songs.map((song) => (
              <div
                key={song.id}
                className="p-4 border-b border-zinc-700 hover:bg-zinc-950 transition-colors cursor-pointer"
                onClick={() => {
                  dispatch(
                    setTrack({
                      id: song.id,
                      title: song.title,
                      createdBy: song.createdBy,
                    })
                  );
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`http://localhost:3000/song/${song.id}/image`}
                      alt="Cover"
                      className="w-12 h-12 rounded-md object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "/default-cover.jpg";
                      }}
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
        </>
      ) : (
        <div className="overflow-y-auto mt-2">
          {songs.map((song) => (
            <div
              key={song.id}
              className="p-4 border-zinc-700 hover:bg-zinc-950 transition-colors cursor-pointer"
              onClick={() => {
                dispatch(
                  setTrack({
                    id: song.id,
                    title: song.title,
                    createdBy: song.createdBy,
                  })
                );
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 ">
                  <img
                    src={`http://localhost:3000/song/${song.id}/image`}
                    alt="Cover"
                    className="w-full h-full scale-130 rounded-md object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/default-cover.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </ResizablePanel>
  );
}
