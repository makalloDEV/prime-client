import { instance } from "@/api/axios.api";
import {
  IRequestSongData,
  IResponseSongData,
  ISongDataFiles,
  IUploadResponse,
  IUserId,
  updateSongType,
} from "@/types";
import { AuthService } from "./auth.service";

export const SongService = {
  async postCreatedSong(
    songData: IResponseSongData
  ): Promise<IResponseSongData> {
    const user = await AuthService.getProfile();
    const { data } = await instance.post<IResponseSongData>(
      `song/created_songs/${user?.id}`,
      songData
    );

    return data;
  },
  async saveSongFiles(cover: File, audio: File): Promise<IUploadResponse> {
    const formData = new FormData();
    formData.append("cover", cover);
    formData.append("audio", audio);

    const { data } = await instance.post<IUploadResponse>("upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },
  async createSong(songData: IRequestSongData): Promise<IResponseSongData> {
    const user = await AuthService.getProfile();
    const { data } = await instance.post<IResponseSongData>(
      `song/${user?.id}`,
      songData
    );
    return data;
  },

  async updateSong(
    updateSongData: updateSongType,
    songId: string
  ): Promise<updateSongType> {
    const { data } = await instance.patch<updateSongType>(
      `song/${songId}`,
      updateSongData
    );
    return data;
  },

  async deleteSong(songId: string): Promise<IResponseSongData> {
    const { data } = await instance.delete(`song/${songId}`);
    return data;
  },

  async getAllSongs(): Promise<IResponseSongData[]> {
    const { data } = await instance.get<IResponseSongData[]>("song");
    return data;
  },
};
