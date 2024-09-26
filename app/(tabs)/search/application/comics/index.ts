import { SearchRepository } from "../../domain/search.repository";

export const createComicsService = (repository: SearchRepository) => ({
  getComics: (offset: number, titleStartsWith: string) =>
    repository.getComics(offset, titleStartsWith)
});
