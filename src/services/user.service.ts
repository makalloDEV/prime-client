import { instance } from "@/api/axios.api";
import { IResponseSongData } from "@/types";
import { AuthService } from "./auth.service";

export const UserService = {
  async getCreatedSongs(): Promise<IResponseSongData[]> {
    const user = await AuthService.getProfile();
    const { data } = await instance.get<IResponseSongData[]>(
      `user/created_songs/${user?.id}`
    );

    return data;
  },

  async addSongToCollection(songId: string): Promise<IResponseSongData> {
    const { data } = await instance.post<IResponseSongData>(
      `user/songs/${songId}`
    );
    return data;
  },

  async getSongFromCollection(songId: string): Promise<IResponseSongData | ""> {
    const { data } = await instance.get<IResponseSongData | "">(
      `user/songs/${songId}`
    );
    return data;
  },

  async getSongsFromCollection(): Promise<IResponseSongData[] | []> {
    const { data } = await instance.get<IResponseSongData[] | []>("user/songs");
    return data;
  },

  async removeSongFromCollection(songId: string): Promise<void> {
    await instance.delete(`user/songs/${songId}`);
  },
};
