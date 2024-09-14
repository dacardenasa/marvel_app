import { Character } from "@/models/characters";
import { parsedURLImage } from "@/utils";

import { CharacterAdapter } from "../models";

export function apiToCharacters(characters: Character[]): CharacterAdapter[] {
  if (!characters.length) return [];
  return characters.map(({ id, name, thumbnail }) => ({
    id,
    name,
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
