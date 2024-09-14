import { Character } from "@/models/characters";
import { CharacterMapped } from "../models";

export function apiToCharacters(
  characters: Character[]
): CharacterMapped[] {
  if (!characters.length) return [];
  return characters.map((character) => ({
    id: character.id,
    name: character.name,
    description: !!character.description
      ? character.description
      : "No description",
    thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`
  }));
}
