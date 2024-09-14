import { Comic } from "@/models";
import { ComicMapped } from "../models";

export function apiToComics(commics: Comic[]): ComicMapped[] {
  if (!commics.length) return [];
  return commics.map((commic) => ({
    id: commic.id,
    title: commic.title,
    description: commic?.description?.length
      ? commic.description
      : "No description!",
    thumbnail: `${commic.thumbnail.path}.${commic.thumbnail.extension}`
  }));
}
