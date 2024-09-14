import { Character, Comic } from "@/models";

export type CharacterAdapter = Pick<Character, "id" | "description" | "name"> & {
  thumbnail: string;
};

export type ComicAdapter = Pick<Comic, "id" | "description" | "title"> & {
  thumbnail: string;
};

