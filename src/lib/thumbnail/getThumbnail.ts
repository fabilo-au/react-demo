import { Thumbnail } from "../types";

const getThumbnail = (thumbnail: Thumbnail) => {
  return `${thumbnail.path}.${thumbnail.extension}`;
};

export default getThumbnail;
