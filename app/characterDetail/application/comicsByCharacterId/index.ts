import { CharacterDetailRepository } from "../../domain/characterDetail.repository";

export const createComicsByIdService = (
  repository: CharacterDetailRepository
) => ({
  getComicsByCharacterId: (characterId: number) =>
    repository.getComicsByCharacterId(characterId)
});
