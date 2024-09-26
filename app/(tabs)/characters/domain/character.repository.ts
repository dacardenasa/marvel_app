import { CharactersData } from "@/shared/domain";

export interface CharactersRepository {
  getCharacters(offset: number): Promise<CharactersData>;
}
