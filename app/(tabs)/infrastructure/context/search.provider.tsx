import React from "react";
import { useState } from "react";
import { SearchContext } from "./search.context";

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [charactersValue, setCharactersValue] = useState("");
  const [comicsValue, setComicsValue] = useState("");

  const handleChangeCharactersValue = (userValue: string) => {
    setCharactersValue(userValue);
  };

  const handleResetCharactersValue = () => setCharactersValue("");

  const handleChangeComicsValue = (userValue: string) => {
    setComicsValue(userValue);
  };

  const handleResetComicsValue = () => setComicsValue("");

  return (
    <SearchContext.Provider
      value={{
        charactersValue,
        comicsValue,
        handleChangeComicsValue,
        handleChangeCharactersValue,
        handleResetCharactersValue,
        handleResetComicsValue
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
