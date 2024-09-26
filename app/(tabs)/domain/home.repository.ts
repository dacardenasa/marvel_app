import { MarvelCharacter } from "./character";
import { MarvelComic } from "./comics";

export interface HomeRepository {
  getLastWeekComics(): Promise<MarvelComic[]>;
  getCharacters(): Promise<MarvelCharacter[]>;
}
