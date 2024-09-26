import { CharacterDetailRepository } from "../../domain/characterDetail.repository";

export const createCharacterDetailByIdService = (
  repository: CharacterDetailRepository
) => ({
  getDetailByCharacterId: (characterId: number) =>
    repository.getDetailByCharacterId(characterId)
});
