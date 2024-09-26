import { ComicDetailRepository } from "../../domain/comicDetail.repository";

export const createCharactersByComicIdService = (repository: ComicDetailRepository) => ({
  getCharactersByComicId: (comicId: string) => repository.getCharactersByComicId(comicId)
});
