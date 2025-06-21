import { useRef, useState } from "react";

interface EditUploadProps {
  setFile: Function;
  accept: string;
  children: React.ReactNode;
  fileType?: "image" | "audio";
}

export const FileEdit: React.FC<EditUploadProps> = ({
  setFile,
  accept,
  children,
  fileType,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const validateFile = async (file: File): Promise<boolean> => {
    if (fileType === "image") {
      return validateImage(file);
    } else {
      return validateAudio(file);
    }
  };

  const validateImage = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);

      img.onload = () => {
        const { width, height } = img;
        URL.revokeObjectURL(url);

        const isSquare = Math.abs(width - height) <= 1;
        const isSizeValid = width <= 3000 && height <= 3000;

        if (!file.type.includes("jpeg")) {
          setError("Разрешены только JPEG изображения");
          resolve(false);
        } else if (!isSquare) {
          setError("Изображение должно быть квадратным");
          resolve(false);
        } else if (!isSizeValid) {
          setError("Максимальный размер изображения 3000x3000 пикселей");
          resolve(false);
        } else {
          setError(null);
          resolve(true);
        }
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        setError("Не удалось загрузить изображение");
        resolve(false);
      };

      img.src = url;
    });
  };

  const validateAudio = (file: File): boolean => {
    const validAudioTypes = ["audio/mpeg", "audio/wav", "audio/x-wav"];
    const maxSize = 50 * 1024 * 1024; // 50 MB

    if (!validAudioTypes.includes(file.type)) {
      setError("Разрешены только MP3 и WAV файлы");
      return false;
    }

    if (file.size > maxSize) {
      setError("Аудиофайл должен быть не больше 50MB");
      return false;
    }

    setError(null);
    return true;
  };

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isValid = await validateFile(file);
    if (isValid) {
      setFile(file);
    } else {
      e.target.value = "";
      setFile(null);
    }
  };

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        className="hidden"
        ref={ref}
        onChange={onChange}
      ></input>
      {children}
      <div>{error !== null ? error : ""}</div>
    </div>
  );
};
