import { CharacterAdapter } from "./characters";
import { ComicDetailAdapter } from "./comicDetail";

export interface ComicDetailRepository {
  getComicDetailsById(comicId: string): Promise<ComicDetailAdapter>;
  getCharactersByComicId(comicId: string): Promise<CharacterAdapter[]>;
}
