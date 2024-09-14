import { Character } from "@/models/characters";
import { CharacterAdapter } from "../models";

export function apiToCharacters(characters: Character[]): CharacterAdapter[] {
  if (!characters.length) return [];
  return characters.map((character) => ({
    id: character.id,
    name: character.name,
    thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`
  }));
}
