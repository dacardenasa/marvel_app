import { Comic } from "@/models";
import { parsedURLImage } from "@/utils";

import { ComicMapped } from "../models";

export function apiToComics(commics: Comic[]): ComicMapped[] {
  if (!commics.length) return [];
  return commics.map(({ id, title, description, thumbnail }) => ({
    id,
    title,
    description: !!description ? description : "No description!",
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
