import { ChangeEvent, useEffect, useState } from "react";
import { FileEdit } from "./components/FileEdit";
import { SongService } from "@/services/song.service";
import { updateSongType } from "@/types";
import SumbitButton from "../Components/SumbitButton";
import { useNavigate } from "react-router-dom";

interface EditSongPageProps {
  songId: string;
  onSubmit: () => void;
}

function EditSongPage({ songId, onSubmit }: EditSongPageProps) {
  const [cover, setCover] = useState(null);
  const [audio, setAudio] = useState(null);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const onChangeSongName = (e: ChangeEvent<HTMLInputElement>) => {
    setSongName(e.target.value);
  };

  const onChangeArtistName = (e: ChangeEvent<HTMLInputElement>) => {
    setArtistName(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if (songName.length === 0 || artistName.length === 0) {
        throw new Error("Поля songName и ArtistName не должны быть пустыми!");
      }

      if (cover === null || audio === null) {
        throw new Error("Поля cover и audio не должны быть пустыми!");
      }

      // Если все проверки пройдены
      const data = await SongService.saveSongFiles(cover, audio);
      const updateSongData: updateSongType = {
        title: songName,
        createdBy: artistName,
        audioUrl: data.audioUrl,
        imageUrl: data.coverUrl,
      };
      const song = await SongService.updateSong(updateSongData, songId);

      onSubmit();
      console.log("Песня успешно обновлена", song);
      setIsSuccess(true);
      setTimeout(() => {
        navigate("../../main/uploader");
      }, 100);
      window.location.reload();
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="max-w-md mx-auto p-4 bg-zinc-700 rounded-lg">
        <div className="mb-3">
          <h2 className="text-md font-medium text-white">Cover</h2>
        </div>
        <form
          action=""
          onSubmit={onSubmitHandler}
        >
          <FileEdit
            setFile={setCover}
            accept="image/*"
            fileType="image"
          >
            <div className="w-24 h-24 bg-gray-200 rounded-md mb-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
              <button>
                {cover === null && (
                  <span className="cursor-pointer text-3xl text-gray-500 mb-0.5">
                    +
                  </span>
                )}
                {cover !== null && (
                  <img
                    className="rounded-md cursor-pointer hover:bg-gray-300"
                    src={`${URL.createObjectURL(cover)}`}
                  ></img>
                )}
              </button>
            </div>
          </FileEdit>

          <div className="space-y-3 bg-zinc-600 p-4 rounded-md shadow-xs">
            <div>
              <label className="block text-xs font-medium text-white mb-1">
                Artist
              </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Artist name"
                onChange={onChangeArtistName}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white mb-1">
                Song name
              </label>
              <input
                type="text"
                className="w-full px-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Song name"
                onChange={onChangeSongName}
              />
            </div>

            <FileEdit
              setFile={setAudio}
              accept="audio/*"
              fileType="audio"
            >
              <div className="pt-1">
                {audio === null && (
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm bg-white border border-gray-200 rounded-md hover:bg-gray-200 transition-colors hover:cursor-pointer">
                    <span className="text-gray-600">Upload audio</span>
                    <span className="text-lg text-gray-500">+</span>
                  </button>
                )}
                {audio !== null && (
                  <button className="w-full flex items-center justify-between px-3 py-2 text-sm bg-green-700 rounded-md hover:bg-gray-200 transition-colors hover:cursor-pointer hover:bg-green-800">
                    <span className="text-white ">Audio is uploaded</span>
                  </button>
                )}
              </div>
            </FileEdit>
          </div>

          <SumbitButton isSuccess={isSuccess}>Edit</SumbitButton>
        </form>
      </div>
    </div>
  );
}

export default EditSongPage;
