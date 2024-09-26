import { ComicDetailRepository } from "../../domain/comicDetail.repository";

export const createComicDetailsByIdService = (repository: ComicDetailRepository) => ({
  getComicDetailsById: (comicId: string) => repository.getComicDetailsById(comicId)
});
