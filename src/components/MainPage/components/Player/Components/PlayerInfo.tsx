import { useEffect, useRef, useState } from "react";
import PlayerAddButton from "./PlayerAddButton";
import { UserService } from "@/services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { wasAddOrRemoveSet } from "@/store/player/player.slice";

interface PlayerInfoProps {
  img: string;
  songTitle: string;
  songAuthor: string;
}

export default function PlayerInfo({
  img,
  songTitle,
  songAuthor,
}: PlayerInfoProps) {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { currentTrack, wasAddOrRemove } = useSelector(
    (state: any) => state.player
  );

  useEffect(() => {
    async function getSong() {
      const data = await UserService.getSongFromCollection(currentTrack.id);
      if (data) {
        setIsAdd(true);
      } else {
        setIsAdd(false);
      }
    }
    getSong();
  }, [songTitle, songAuthor]);

  const onAddClickHandler = async () => {
    if (!isAdd) {
      const data = await UserService.addSongToCollection(currentTrack.id);
      setIsAdd(true);
      dispatch(wasAddOrRemoveSet());
    } else {
      await UserService.removeSongFromCollection(currentTrack.id);
      setIsAdd(false);
      dispatch(wasAddOrRemoveSet());
    }
  };

  return (
    <div className="flex items-center space-x-4 py-2 px-4 rounded-md">
      {/* Контейнер обложки (фиксированный квадрат) */}
      <div className="song-img w-16 h-16 rounded-md overflow-hidden bg-gray-300 flex-shrink-0">
        <img
          src={img}
          alt="Обложка трека"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Информация о треке */}
      <div className="flex items-center max-width-[200px]">
        {/* Контейнер с текстом трека - занимает оставшееся пространство */}
        <div className="song-info flex flex-col justify-center flex-1 min-w-0 pr-2">
          <p className="text-white text-sm font-medium truncate">{songTitle}</p>
          <p className="text-gray-400 text-xs truncate">{songAuthor}</p>
        </div>

        {/* Кнопка - фиксированной ширины, не сжимается */}
        <PlayerAddButton
          isAdd={isAdd}
          className="flex-shrink-0 cursor-pointer "
          onClick={onAddClickHandler}
        />
      </div>
    </div>
  );
}
