import axios from "axios";

import { MarvelController } from "@/utils";
import { CharactersData, CharactersResponse } from "@/models";
import { QueryKey } from "@tanstack/react-query";

export const charactersAPI = {
  fetchInfiniteCharacters: async ({
    pageParam = 0,
    queryKey
  }: {
    pageParam: number;
    queryKey: QueryKey;
  }): Promise<CharactersData> => {
    const [_key, nameStartsWith] = queryKey;
    const apiController = new MarvelController(axios);
    const {
      data: { data }
    }: { data: CharactersResponse } = await apiController.get(
      `/characters?offset=${pageParam}&nameStartsWith=${nameStartsWith}`
    );
    return data;
  }
};
