import { ComicsData, ComicsResponse } from "@/shared/domain";
import { AxiosController } from "@/shared/infrastructure/services";

import { ComicRepository } from "../domain/comic.repository";

const apiController = new AxiosController();

export const createAxiosRepository = (): ComicRepository => ({
  getComics: async (offset: number): Promise<ComicsData> => {
    const {
      data: { data }
    }: { data: ComicsResponse } = await apiController.get(
      `/comics?offset=${offset}`
    );
    return data;
  }
});
