
import { Character } from "@/shared/domain";
import { parsedURLImage } from "@/utils";
import { MarvelCharacter } from "../../domain/character";

export function apiToCharacters(characters: Character[]): MarvelCharacter[] {
  if (!characters.length) return [];
  return characters.map(({ id, name, description, thumbnail }) => ({
    id,
    name,
    description: description.length ? description : "No description",
    thumbnail: parsedURLImage(thumbnail.path, thumbnail.extension)
  }));
}
