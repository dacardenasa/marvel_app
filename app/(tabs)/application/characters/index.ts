import { HomeRepository } from "../../domain/home.repository";

export const createCharactersService = (repository: HomeRepository) => ({
    getCharacters: () => repository.getCharacters()
});