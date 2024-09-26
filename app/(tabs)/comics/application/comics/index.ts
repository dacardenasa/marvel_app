import { ComicRepository } from "../../domain/comic.repository";

export const createComicsService = (repository: ComicRepository) => ({
  getComics: (offset: number) => repository.getComics(offset)
});
