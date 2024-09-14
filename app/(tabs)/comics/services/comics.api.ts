import axios from "axios";

import { MarvelController } from "@/utils";
import { ComicsData, ComicsResponse } from "@/models";

export const comicsAPI = {
  fetchInfiniteComics: async ({
    pageParam = 0
  }: {
    pageParam: number;
  }): Promise<ComicsData> => {
    const apiController = new MarvelController(axios);
    const {
      data: { data }
    }: { data: ComicsResponse } = await apiController.get(
      `/comics?offset=${pageParam}`
    );
    return data;
  }
};
