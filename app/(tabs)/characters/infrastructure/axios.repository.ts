import { AxiosController } from "@/shared/infrastructure/services";
import { CharactersRepository } from "../domain/character.repository";
import { CharactersData, CharactersResponse } from "@/shared/domain";

const apiController = new AxiosController();

export const createAxiosRepository = (): CharactersRepository => ({
  getCharacters: async (offset: number): Promise<CharactersData> => {
    const {
      data: { data }
    }: { data: CharactersResponse } = await apiController.get(
      `/characters?offset=${offset}`
    );
    return data;
  }
});
