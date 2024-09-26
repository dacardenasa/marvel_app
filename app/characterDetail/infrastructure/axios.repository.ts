import { AxiosController } from "@/shared/infrastructure/services";
import { CharactersResponse, ComicsResponse } from "@/shared/domain";

import { apiToCharacter, apiToComics } from "./adapters";
import { CharacterDetailRepository } from "../domain/characterDetail.repository";
import { CharacterAdapter } from "../domain/characterDetail";
import { ComicAdapter } from "../domain/comic";

const apiController = new AxiosController();

export const createAxiosRepository = (): CharacterDetailRepository => ({
  getDetailByCharacterId: async (
    characterId: number
  ): Promise<CharacterAdapter> => {
    const {
      data: { data }
    }: { data: CharactersResponse } = await apiController.get(
      `/characters/${characterId}`
    );
    const [characterMapped] = apiToCharacter(data.results);
    return characterMapped;
  },
  getComicsByCharacterId: async (
    characterId: number
  ): Promise<ComicAdapter[]> => {
    const {
      data: { data }
    }: { data: ComicsResponse } = await apiController.get(
      `/characters/${characterId}/comics`
    );
    const comics = apiToComics(data.results);
    return comics;
  }
});
