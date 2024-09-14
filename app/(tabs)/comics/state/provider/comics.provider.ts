import { createContext } from "react";

export type Comic = {
    id: number;
    title: string;
    description: string;
    price: number;
  };
  
  export type ComicsInitialState = { comics: Comic[] }
  
  export const initialState: ComicsInitialState = {
    comics: []
  };
  
  export const ComicsContext = createContext<ComicsInitialState>({} as ComicsInitialState);