import { Character } from "@/shared/domain";

export type MarvelCharacter = Pick<
  Character,
  "id" | "name"
> & { thumbnail: string };
