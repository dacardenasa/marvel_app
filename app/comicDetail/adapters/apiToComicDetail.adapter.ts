import { Comic } from "@/models";
import { ComicDetailAdapter } from "../models";

export function apiToComicDetail(comicDetail: Comic[]): ComicDetailAdapter[] {
  if (!comicDetail.length) return [];
  const {
    title,
    textObjects,
    thumbnail,
    format,
    pageCount,
    prices,
    images,
    creators
  } = comicDetail[0];
  return [
    {
      title,
      synopsis: textObjects[0]?.text ?? "Synopsis is not available",
      thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
      format: !!format ? format : "Unknown",
      pageCount: !!pageCount ? pageCount : "Unknown",
      prices,
      creators: [...creators.items],
      comicImages: images.map((image) => `${image.path}.${image.extension}`)
    }
  ];
}
