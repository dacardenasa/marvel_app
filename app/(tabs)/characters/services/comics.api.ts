import axios from "axios";

import { MarvelController } from "@/utils";
import { CharactersData, CharactersResponse } from "@/models";

export const charactersAPI = {
  fetchInfiniteCharacters: async ({
    pageParam = 0
  }: {
    pageParam: number;
  }): Promise<CharactersData> => {
    const apiController = new MarvelController(axios);
    const {
      data: { data }
    }: { data: CharactersResponse } = await apiController.get(
      `/characters?offset=${pageParam}`
    );
    return data;
  }
};
