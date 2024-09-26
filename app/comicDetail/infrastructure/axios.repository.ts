import { AxiosController } from "@/shared/infrastructure/services";
import { CharactersResponse, ComicsResponse } from "@/shared/domain";

import { ComicDetailRepository } from "../domain/comicDetail.repository";
import { ComicDetailAdapter } from "../domain/comicDetail";
import { apiToCharacters, apiToComicDetail } from "./adapters";
import { CharacterAdapter } from "../domain/characters";

const axiosController = new AxiosController();

export const createAxiosRepository = (): ComicDetailRepository => ({
  getComicDetailsById: async (comicId: string): Promise<ComicDetailAdapter> => {
    const {
      data: { data }
    }: { data: ComicsResponse } = await axiosController.get(
      `/comics/${comicId}`
    );
    const [comicMapped] = apiToComicDetail(data.results);
    return comicMapped;
  },
  getCharactersByComicId: async (
    comicId: string
  ): Promise<CharacterAdapter[]> => {
    const {
      data: { data }
    }: { data: CharactersResponse } = await axiosController.get(
      `/comics/${comicId}/characters`
    );
    const characters = apiToCharacters(data.results);
    return characters;
  }
});
