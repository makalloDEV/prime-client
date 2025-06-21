import { useDispatch, useSelector } from "react-redux";
import { PlayerBarButton } from "./PlayerBarButton";
import { useEffect, useRef } from "react";
import { setVolume } from "@/store/player/player.slice";

export default function PlayerVolume() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, currentTrack, volume } = useSelector(
    (state: any) => state.player
  );

  // Dispatch для изменения громкости
  const dispatch = useDispatch();

  // Обработчик изменения ползунка
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    dispatch(setVolume(newVolume));
  };
  return (
    <div className="flex items-center space-x-4 mr-4">
      {/* Кнопка очереди */}
      <PlayerBarButton
        type="queue-button"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        d="M12 3V21M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
        stroke="#8D8C96"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hover:bg-gray-100 rounded p-1 transition-colors"
      />

      {/* Кнопка громкости */}
      <PlayerBarButton
        type="volume-button"
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        d="M18.6668 10.5C19.4241 11.5097 19.8335 12.7379 19.8335 14C19.8335 15.2622 19.4241 16.4903 18.6668 17.5M22.5915 21.4247C23.5665 20.4497 24.34 19.2921 24.8676 18.0182C25.3953 16.7443 25.6669 15.3789 25.6669 14C25.6669 12.6211 25.3953 11.2557 24.8676 9.98181C24.34 8.70788 23.5665 7.55036 22.5915 6.57535M12.8335 5.48568C12.8333 5.32318 12.7849 5.16439 12.6945 5.02934C12.6041 4.8943 12.4757 4.78907 12.3256 4.72691C12.1754 4.66476 12.0103 4.64847 11.8509 4.68011C11.6915 4.71175 11.545 4.78989 11.43 4.90468L7.482 8.85151C7.32963 9.00479 7.14837 9.1263 6.9487 9.20901C6.74904 9.29172 6.53495 9.33398 6.31883 9.33335H3.50016C3.19074 9.33335 2.894 9.45626 2.6752 9.67505C2.45641 9.89385 2.3335 10.1906 2.3335 10.5V17.5C2.3335 17.8094 2.45641 18.1062 2.6752 18.325C2.894 18.5438 3.19074 18.6667 3.50016 18.6667H6.31883C6.53495 18.666 6.74904 18.7083 6.9487 18.791C7.14837 18.8737 7.32963 18.9952 7.482 19.1485L11.4288 23.0965C11.5439 23.2118 11.6905 23.2903 11.8502 23.3221C12.0099 23.354 12.1755 23.3377 12.3259 23.2753C12.4763 23.213 12.6049 23.1074 12.6952 22.9719C12.7856 22.8364 12.8337 22.6772 12.8335 22.5143V5.48568Z"
        stroke="#8D8C96"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hover:bg-gray-100 rounded p-1 transition-colors"
      />

      {/* Ползунок громкости */}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-24 accent-white"
      />
    </div>
  );
}
