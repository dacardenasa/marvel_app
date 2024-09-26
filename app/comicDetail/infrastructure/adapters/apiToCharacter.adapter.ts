import { parsedURLImage } from "@/utils";

import { Character } from "@/shared/domain";
import { CharacterAdapter } from "../../domain/characters";

export function apiToCharacters(characters: Character[]): CharacterAdapter[] {
  if (!characters.length) return [];
  return characters.map(({ id, name, thumbnail }) => ({
    id,
    name,
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
