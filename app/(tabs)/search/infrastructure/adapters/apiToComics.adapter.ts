import { parsedURLImage } from "@/utils";
import { Comic } from "@/shared/domain";
import { MarvelComic } from "../../domain/comic";

export function apiToComics(commics: Comic[]): MarvelComic[] {
  if (!commics.length) return [];
  return commics.map(({ id, title, description, thumbnail }) => ({
    id,
    title,
    description: description?.length ? description : "No description!",
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
