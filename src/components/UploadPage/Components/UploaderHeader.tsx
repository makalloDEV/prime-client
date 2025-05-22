import { IResponseSongData } from "@/types";
import UploadButton from "./UploadButton";

interface UploaderHeaderProps {
  songs: IResponseSongData[];
}

function UploaderHeader({ songs }: UploaderHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      {songs.length === 0 && (
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-2xl font-bold text-white">Uploader</h3>

          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-600 text-lg">You don't have any songs</p>

            <UploadButton
              bgColor="bg-black"
              fontColor="text-zinc-300"
            ></UploadButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploaderHeader;
