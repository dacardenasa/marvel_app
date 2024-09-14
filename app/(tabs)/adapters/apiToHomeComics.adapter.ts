import { Comic } from "@/models";
import { HomeComicsMaped } from "../models";

export function apiToHomeComics(commics: Comic[]): HomeComicsMaped[] {
  if (!commics.length) return [];
  return commics.map((comic) => ({
    id: comic.id,
    title: comic.title,
    thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    price: comic.prices[0].price ?? 0
  }));
}
