import { Comic } from "@/models";
import { parsedURLImage } from "@/utils";

import { HomeComicsMaped } from "../models";

export function apiToHomeComics(commics: Comic[]): HomeComicsMaped[] {
  if (!commics.length) return [];
  return commics.map(({ id, title, thumbnail, prices }) => ({
    id,
    price: prices[0].price ?? 0,
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension),
    title,
  }));
}
