import axios from "axios";

import { MarvelController } from "@/utils";
import { ComicsData, ComicsResponse } from "@/models";
import { QueryKey } from "@tanstack/react-query";

export const comicsAPI = {
  fetchInfiniteComics: async ({
    pageParam = 0,
    queryKey
  }: {
    pageParam: number;
    queryKey: QueryKey;
  }): Promise<ComicsData> => {
    const [_key, titleStartsWith] = queryKey;
    const apiController = new MarvelController(axios);
    const {
      data: { data }
    }: { data: ComicsResponse } = await apiController.get(
      `/comics?offset=${pageParam}&titleStartsWith=${titleStartsWith}`
    );
    return data;
  }
};
