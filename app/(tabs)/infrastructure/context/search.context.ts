import { createContext } from "react";

export type SearchState = {
  charactersValue: string;
  comicsValue: string;
  handleChangeCharactersValue: (value: string) => void;
  handleResetCharactersValue: () => void;
  handleChangeComicsValue: (value: string) => void;
  handleResetComicsValue: () => void;
};

export const SearchContext = createContext({} as SearchState);
