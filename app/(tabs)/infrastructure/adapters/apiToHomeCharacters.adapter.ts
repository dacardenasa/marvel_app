import { parsedURLImage } from "@/utils";

import { HomeCharacterMapped } from "../models";
import { Character } from "@/shared/domain";

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
