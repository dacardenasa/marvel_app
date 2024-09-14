import axios from "axios";

import { MarvelController } from "@/utils";
import { ComicsData, ComicsResponse } from "@/models";
import { CharactersData, CharactersResponse } from "@/models/characters";

export const homeAPI = {
  fetchLastWeekComics: async (): Promise<ComicsData> => {
    const apiController = new MarvelController(axios);
    const {
      data: { data }
    }: { data: ComicsResponse } = await apiController.get(
      "/comics?dateDescriptor=lastWeek&limit=10"
    );
    return data;
  },
  fetchCharacters: async (): Promise<CharactersData> => {
    const apiController = new MarvelController(axios);
    const {
      data: { data }
    }: { data: CharactersResponse } = await apiController.get(
      "/characters?limit=10"
    );
    return data;
  }
};
