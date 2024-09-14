import { Comic } from "@/models";
import { Character } from "@/models/characters";

export type HomeComicsMaped = Pick<Comic, "id" | "title"> & {
  price: number;
  thumbnail: string;
};

export type HomeCharacterMapped = Pick<
  Character,
  "id" | "name"
> & { thumbnail: string };
