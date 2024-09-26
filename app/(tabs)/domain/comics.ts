import { Comic } from "@/shared/domain";

export type MarvelComic = Pick<Comic, "id" | "title"> & {
  price: number;
  thumbnail: string;
};
