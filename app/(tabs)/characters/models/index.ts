import { Character } from "@/models";

export type CharacterMapped = Pick<Character, "id" | "name" | "description"> & {
  thumbnail: string;
};
