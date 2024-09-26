import { HomeRepository } from "../../domain/home.repository";

export const createComicsService = (repository: HomeRepository) => ({
    geLastWeekComics: () => repository.getLastWeekComics()
});