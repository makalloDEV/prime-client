import { instance } from "@/api/axios.api";
import { IResponseUserData, IUser, IUserData } from "@/types";

export const AuthService = {
  async registration(
    userData: IUserData
  ): Promise<IResponseUserData | undefined> {
    const { data } = await instance.post<IResponseUserData>(
      "user/registration",
      userData
    );
    return data;
  },
  async login(userData: IUserData): Promise<IUser | undefined> {
    const { data } = await instance.post<IUser | undefined>(
      "auth/login",
      userData
    );
    return data;
  },
  async getProfile(): Promise<IUser | undefined> {
    const { data } = await instance.get<IUser | undefined>("auth/profile");
    return data;
  },
};
