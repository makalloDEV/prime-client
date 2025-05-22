import { instance } from "@/api/axios.api";
import { IResponseSongData, ISongData } from "@/types";

export const SongService = {
  async postCreatedSong(songData: ISongData): Promise<IResponseSongData> {
    const { data } = await instance.post<IResponseSongData>(
      "user/created_songs",
      songData
    );

    return data;
  },
};
