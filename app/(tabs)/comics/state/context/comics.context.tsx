import { useReducer } from "react";
import { reducers } from "../reducers/comics.reducers";
import { ComicsContext, initialState } from "../provider/comics.provider";

export const ContextProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <ComicsContext.Provider value={{ ...state, ...dispatch }}>
      {children}
    </ComicsContext.Provider>
  );
};
