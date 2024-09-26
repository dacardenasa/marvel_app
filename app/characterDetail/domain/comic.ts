import { Comic } from "@/shared/domain";

export type ComicAdapter = Pick<Comic, "id" | "description" | "title"> & {
  thumbnail: string;
};
