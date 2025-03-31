interface MusicImageProps {
  ImgPath: string;
}

function MusicImage({ ImgPath }: MusicImageProps) {
  return (
    <>
      <img
        src={ImgPath}
        alt=""
      />
    </>
  );
}

export default MusicImage;
