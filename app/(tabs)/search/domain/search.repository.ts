import { CharactersData, ComicsData } from "@/shared/domain";

export interface SearchRepository {
  getComics(offset: number, titleStarstWith: string): Promise<ComicsData>;
  getCharacters(offset: number, nameStartsWith: string): Promise<CharactersData>;
}
