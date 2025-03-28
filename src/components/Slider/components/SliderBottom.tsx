import "../Slider.css";
import { useEffect, useRef, useState, useCallback } from "react";

interface SliderBottomProps {
  onDataChange: (arg0: string) => void;
}

interface ArtistData {
  [key: string]: string;
}

function SliderBottom({ onDataChange }: SliderBottomProps) {
  const [artist, setArtist] = useState<string>("carti");

  const artists_list = ["carti", "west", "travis"];

  const artists: ArtistData = {
    carti: "PLAYBOI CARTI",
    west: "KANYE WEST",
    travis: "TRAVIS SCOTT",
  };

  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = useCallback(() => {
    timerId.current = setInterval(() => {
      setArtist((prevArtist) => {
        const currentIndex = artists_list.indexOf(prevArtist);
        const nextIndex = (currentIndex + 1) % artists_list.length;
        const newArtist = artists_list[nextIndex];
        return newArtist;
      });
    }, 10000);
  }, [artists_list]);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
      }
    };
  }, [startTimer]);

  const setIsActiveHandle = (newArtist: string) => {
    setArtist(newArtist);
    onDataChange(newArtist);
  };

  useEffect(() => {
    onDataChange(artist);
  }, [artist, onDataChange]);
  return (
    <div className="slider-bottom">
      <div className="slider-bottom-content">
        <div className="slider-bottom-text">
          <p
            className="nunito-regular"
            style={{ fontSize: `16pt` }}
          >
            {artists[`${artist}`]}
          </p>
          <p
            className="nunito-regular"
            style={{ marginTop: `-10px` }}
          >
            PRIME ARTIST
          </p>
        </div>
        <div
          className="switch-buttons"
          style={{
            display: `flex`,
            justifyContent: `center`,
            marginBottom: `30px`,
          }}
        >
          <button
            className={artist === "carti" ? `active` : ""}
            onClick={() => setIsActiveHandle("carti")}
          ></button>
          <button
            className={artist === "west" ? `active` : ""}
            style={{ marginInline: `20px` }}
            onClick={() => setIsActiveHandle("west")}
          ></button>
          <button
            className={artist === "travis" ? `active` : ""}
            onClick={() => setIsActiveHandle("travis")}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default SliderBottom;
