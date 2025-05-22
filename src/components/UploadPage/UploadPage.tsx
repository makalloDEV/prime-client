import { useEffect, useState } from "react";
import { UserService } from "../../services/user.service";
import { IResponseSongData } from "@/types";
import UploaderHeader from "./Components/UploaderHeader";

function UploadPage() {
  const [songs, setSongs] = useState<IResponseSongData[] | []>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await UserService.getCreatedSongs();
        setSongs(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    }

    fetchData();
  }, []);

  return <UploaderHeader songs={songs}></UploaderHeader>;
}

export default UploadPage;
