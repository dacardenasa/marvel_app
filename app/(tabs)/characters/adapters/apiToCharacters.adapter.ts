import { Character } from "@/models/characters";
import { CharacterMapped } from "../models";
import { parsedURLImage } from "@/utils";

export function apiToCharacters(characters: Character[]): CharacterMapped[] {
  if (!characters.length) return [];
  return characters.map(({ id, name, description, thumbnail }) => ({
    id,
    name,
    description: !!description ? description : "No description",
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
