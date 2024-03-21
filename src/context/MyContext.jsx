import { createContext, useContext } from "react";

export const MyContext = createContext({
  ballPos: 1,
  rowsBeforeBall: [],
  rowsAfterBall: [],
});

export const MyContextProvider = MyContext.Provider;

export function useMyContext() {
  return useContext(MyContext);
}
