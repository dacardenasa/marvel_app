import { Character } from "@/models/characters";
import { HomeCharacterMapped } from "../models";

export function apiToHomeCharacters(
  characters: Character[]
): HomeCharacterMapped[] {
  if (!characters.length) return [];
  return characters.map((character) => ({
    id: character.id,
    name: character.name,
    thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
  }));
}
