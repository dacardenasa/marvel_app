import { Character } from "@/shared/domain";

export type CharacterAdapter = Pick<
  Character,
  "id" | "description" | "name"
> & {
  thumbnail: string;
};
