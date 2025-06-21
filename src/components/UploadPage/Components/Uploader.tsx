import { useEffect, useState } from "react";
import { IResponseSongData } from "@/types";
import UploadButton from "./UploadButton";
import EditSongPage from "../EditSongPage/editSongPage";
import { SongService } from "@/services/song.service";
import { useDispatch, useSelector } from "react-redux";
import { setTrack } from "@/store/player/player.slice";

interface UploaderProps {
  songs: IResponseSongData[];
}

function Uploader({ songs }: UploaderProps) {
  const [editingSongId, setEditingSongId] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { queue } = useSelector((state: any) => state.player);
  const { currentTrack } = useSelector((state: any) => state.player);

  const handleEditClick = (songId: string) => {
    setEditingSongId(songId);
  };

  const handleCloseEdit = () => {
    setEditingSongId(null);
  };

  const handleDeleteClick = async (songId: string) => {
    const data = await SongService.deleteSong(songId);
    window.location.reload();
  };

  return (
    <div
      className={`${
        songs.length === 0
          ? "flex flex-col items-center justify-center h-full p-4 text-center"
          : ""
      }`}
    >
      {editingSongId ? (
        <div className="relative w-full">
          {/* Кнопка "Назад" */}
          <button
            onClick={handleCloseEdit}
            className="mt-2 ml-2 top-4 left-4 z-10 flex items-center text-zinc-300 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Назад
          </button>

          <EditSongPage
            onSubmit={() => handleCloseEdit()}
            songId={editingSongId}
          />
        </div>
      ) : songs.length === 0 ? (
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Uploader</h3>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-600 text-lg">You don't have any songs</p>
            <UploadButton
              bgColor="bg-black"
              fontColor="text-zinc-300"
            />
          </div>
        </div>
      ) : (
        <div className="w-full overflow-hidden bg-zinc-900">
          {/* Header */}
          <div className="flex place-content-between p-4 bg-zinc-800 content-center">
            <h3 className="text-xl font-bold mt-3 text-white">Uploader</h3>
            <UploadButton
              bgColor="bg-black"
              fontColor="text-zinc-300"
            />
          </div>

          {/* Song list with fixed height and scroll */}
          <div className="max-h-[480px] overflow-y-auto">
            {songs.map((song) => (
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
                <div className="flex justify-between items-center ">
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
                  <div className="flex space-x-3 mr-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(song.id);
                      }}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium cursor-pointer bg mr-5"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClick(song.id);
                      }}
                      className="text-red-400 hover:text-red-300 text-sm font-medium cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Uploader;
