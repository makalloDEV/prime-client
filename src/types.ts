export interface ArtistData {
  albums: string[];
  songs: string[];
}

export interface Data {
  carti: ArtistData[];
  west: ArtistData[];
  travis: ArtistData[];
}

export type JsonDataType = Data[];

export interface IUser {
  id: string;
  username: string;
  token: string;
}

export interface IUserData {
  username: string;
  password: string;
}

export interface IResponseUserData {
  username: string | undefined;
  password: string | undefined;
  createdAt: string | undefined;
  updatedAt: string | undefined;
  _id: string | undefined;
  message: string | undefined;
}
