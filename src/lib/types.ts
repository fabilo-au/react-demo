export type Thumbnail = {
  path: string;
  extension: string;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
};
