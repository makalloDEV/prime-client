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
  return (
    <div className="flex items-center space-x-4 py-2 px-4 rounded-md">
      <div className="song-img w-16 h-16 rounded-md overflow-hidden flex items-center justify-center">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="song-info flex flex-col justify-center">
        <span className="text-white text-sm font-medium">{songTitle}</span>
        <span className="text-gray-400 text-xs">{songAuthor}</span>
      </div>
    </div>
  );
}
