import { Comic } from "@/models";
import { ComicAdapter } from "../models";

export function apiToComics(commics: Comic[]): ComicAdapter[] {
  if (!commics.length) return [];
  return commics.map((commic) => ({
    id: commic.id,
    title: commic.title,
    description: commic.description,
    thumbnail: `${commic.thumbnail.path}.${commic.thumbnail.extension}`
  }));
}
