import { CharactersData, CharactersResponse, ComicsData, ComicsResponse } from "@/models";
import { MarvelController } from "@/utils";
import { QueryKey } from "@tanstack/react-query";
import axios from "axios";

export const comicDetailAPI = {
  fetchComicsDetail: async ({ queryKey }: { queryKey: QueryKey }): Promise<ComicsData> => {
    const { 1: id } = queryKey
    const apiController = new MarvelController(axios);
    const {
      data: { data }
    }: { data: ComicsResponse } = await apiController.get(`/comics/${id}`);
    return data;
  },
  fetchCharactersByComicId: async ({ queryKey }: { queryKey: QueryKey }): Promise<CharactersData> => {
    const { 1: id } = queryKey
    const apiController = new MarvelController(axios);
    const {
      data: { data }
    }: { data: CharactersResponse } = await apiController.get(`/comics/${id}/characters`);
    return data;
  }
};
