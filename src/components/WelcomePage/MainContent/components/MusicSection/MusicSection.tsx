import MusicImage from "./MusicImage.tsx/MusicImage";
import "../../MainContent.css";

interface MusicSectionProps {
  images: string[];
  type: string;
}

function MusicSection({ images, type }: MusicSectionProps) {
  return (
    <div>
      <div className="main-content-music-img">
        <h2 className={`nunito-italic ${type}`}>
          {type === "albums" ? "LISTEN PRIME ALBUMS" : "LISTEN PRIME SONGS"}
        </h2>
        {images.map((image, index) => (
          <MusicImage
            key={index}
            ImgPath={`${image}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicSection;
