import { CharactersRepository } from "../../domain/character.repository";

export const createCharactersService = (repository: CharactersRepository) => ({
  getCharacters: (offset: number) => repository.getCharacters(offset)
});
