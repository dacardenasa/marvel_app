import { AxiosController } from "@/shared/infrastructure/services";
import { CharactersResponse, ComicsResponse } from "@/shared/domain";

import { MarvelComic } from "../domain/comics";
import { MarvelCharacter } from "../domain/character";
import { HomeRepository } from "../domain/home.repository";
import { apiToHomeCharacters, apiToHomeComics } from "./adapters";

const apiController = new AxiosController();

export const createAxiosRepository = (): HomeRepository => ({
  getLastWeekComics: async (): Promise<MarvelComic[]> => {
    const {
      data: { data }
    }: { data: ComicsResponse } = await apiController.get(
      "/comics?dateDescriptor=lastWeek&limit=10"
    );
    const charactersMapped = apiToHomeComics(data.results);
    return charactersMapped;
  },
  getCharacters: async (): Promise<MarvelCharacter[]> => {
    const {
      data: { data }
    }: { data: CharactersResponse } = await apiController.get(
      "/characters?limit=10"
    );
    const charactersMapped = apiToHomeCharacters(data.results);
    return charactersMapped;
  }
});
