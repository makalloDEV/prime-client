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
