import { parsedURLImage } from "@/utils";

import { CharacterAdapter } from "../models";
import { Character } from "@/shared/domain";

export function apiToCharacter(characters: Character[]): CharacterAdapter[] {
  if (!characters.length) return [];
  return characters.map(({ id, name, description, thumbnail }) => ({
    id,
    name,
    description: description.length ? description : "No description",
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
