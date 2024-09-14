import { Comic, ComicsInitialState } from "../provider/comics.provider";

export const enum Actions {
  "loadComics" = "loadComics",
  "addComic" = "addComic",
  "updateComic" = "updateComic",
  "deleteComic" = "deleteComic"
}

export type ComicsActions =
  | { type: Actions.loadComics; payload: Comic[] }
  | { type: Actions.addComic; payload: Comic }
  | { type: Actions.updateComic; payload: Comic }
  | { type: Actions.deleteComic; payload: number };

export const reducers = (state: ComicsInitialState, action: ComicsActions) => {
  switch (action.type) {
    case Actions.loadComics:
      return { ...state, comics: action.payload };
    case Actions.addComic:
      return {
        ...state,
        comics: [...state.comics, action.payload]
      };
    case Actions.updateComic:
      return {
        ...state,
        comics: state.comics.map((comic) =>
          comic.id === action.payload.id ? action.payload : comic
        )
      };
    case Actions.deleteComic:
      return {
        ...state,
        comics: state.comics.filter((comic) => comic.id !== action.payload)
      };
    default:
      throw new Error(`Unknown action`);
  }
};
