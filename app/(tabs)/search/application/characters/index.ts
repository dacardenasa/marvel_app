import { SearchRepository } from "../../domain/search.repository";

export const createCharactersService = (repository: SearchRepository) => ({
  getCharacters: (offset: number, nameStartsWith: string) =>
    repository.getCharacters(offset, nameStartsWith)
});
