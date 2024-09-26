import { CharacterAdapter } from "./characterDetail";
import { ComicAdapter } from "./comic";

export interface CharacterDetailRepository {
  getDetailByCharacterId(characterId: number): Promise<CharacterAdapter>;
  getComicsByCharacterId(characterId: number): Promise<ComicAdapter[]>;
}
