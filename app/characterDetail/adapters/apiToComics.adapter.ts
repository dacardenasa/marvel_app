import { Comic } from "@/models";
import { ComicAdapter } from "../models";
import { parsedURLImage } from "@/utils";

export function apiToComics(commics: Comic[]): ComicAdapter[] {
  if (!commics.length) return [];
  return commics.map(({ id, title, description, thumbnail }) => ({
    id,
    title,
    description,
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
