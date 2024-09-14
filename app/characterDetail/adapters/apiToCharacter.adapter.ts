import { Character } from "@/models/characters";
import { CharacterAdapter } from "../models";

export function apiToCharacter(characters: Character[]): CharacterAdapter[] {
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
