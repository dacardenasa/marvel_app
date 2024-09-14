import { parsedURLImage } from "@/utils";
import { Character } from "@/models";

import { HomeCharacterMapped } from "../models";

export function apiToHomeCharacters(
  characters: Character[]
): HomeCharacterMapped[] {
  if (!characters.length) return [];
  return characters.map(({ id, name, thumbnail }) => ({
    id,
    name,
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
