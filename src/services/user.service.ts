import { instance } from "@/api/axios.api";
import { IResponseSongData } from "@/types";

export const UserService = {
  async getCreatedSongs(): Promise<IResponseSongData[]> {
    const { data } = await instance.get<IResponseSongData[]>(
      "user/created_songs"
    );

    return data;
  },
};
