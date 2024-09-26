import {
  CharactersData,
  CharactersResponse,
  ComicsData,
  ComicsResponse
} from "@/shared/domain";
import { AxiosController } from "@/shared/infrastructure/services";

import { SearchRepository } from "../domain/search.repository";

const apiController = new AxiosController();

export const createAxiosRepository = (): SearchRepository => ({
  getComics: async (
    offset: number,
    titleStartsWith: string
  ): Promise<ComicsData> => {
    const {
      data: { data }
    }: { data: ComicsResponse } = await apiController.get(
      `/comics?offset=${offset}&titleStartsWith=${titleStartsWith}`
    );
    return data;
  },
  getCharacters: async (
    offset: number,
    nameStartsWith: string
  ): Promise<CharactersData> => {
    const {
      data: { data }
    }: { data: CharactersResponse } = await apiController.get(
      `/characters?offset=${offset}&nameStartsWith=${nameStartsWith}`
    );
    return data;
  }
});
