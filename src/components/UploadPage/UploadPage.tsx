import { useEffect, useState } from "react";
import { UserService } from "../../services/user.service";
import { IResponseSongData, updateSongType } from "@/types";
import Uploader from "./Components/Uploader";

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

  return <Uploader songs={songs}></Uploader>;
}

export default UploadPage;
