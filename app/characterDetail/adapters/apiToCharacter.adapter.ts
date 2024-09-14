import { Character } from "@/models/characters";
import { parsedURLImage } from "@/utils";

import { CharacterAdapter } from "../models";

export function apiToCharacter(characters: Character[]): CharacterAdapter[] {
  if (!characters.length) return [];
  return characters.map(({ id, name, description, thumbnail }) => ({
    id,
    name,
    description: !!description ? description : "No description",
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
