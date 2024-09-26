import { Comic } from "@/shared/domain";
import { ComicAdapter } from "../models";
import { parsedURLImage } from "@/utils";

export function apiToComics(comics: Comic[]): ComicAdapter[] {
  if (!comics.length) return [];
  return comics.map(({ id, title, description, thumbnail }) => ({
    id,
    title,
    description,
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
