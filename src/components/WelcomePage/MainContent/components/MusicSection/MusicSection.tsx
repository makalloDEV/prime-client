import MusicImage from "./MusicImage.tsx/MusicImage";

interface MusicSectionProps {
  images: string[];
  type: string;
}

function MusicSection({ images, type }: MusicSectionProps) {
  return (
    <div className="space-y-8">
      {" "}
      {/* Увеличил отступ до 8 (32px) для лучшей визуальной иерархии */}
      <h2
        className={`
        text-white 
        text-center 
        font-nunito 
        text-4xl md:text-5xl  /* 48px на всех экранах, можно использовать text-[48px] */
        italic 
        font-extralight  /* font-weight: 200 */
        leading-normal  /* line-height: normal */
        ${type === "albums" ? "text-blue-400" : "text-green-400"}
      `}
      >
        {type === "albums" ? "LISTEN PRIME ALBUMS" : "LISTEN PRIME SONGS"}
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {" "}
        {/* Центрируем изображения */}
        {images.map((image, index) => (
          <MusicImage
            key={index}
            ImgPath={image}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicSection;
