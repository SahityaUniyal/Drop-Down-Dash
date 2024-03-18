import { createContext, useContext } from "react";

export const MyContext = createContext({
  score: 0,
  level: 1,
  ballPos: 0,
  rowsBeforeBall: 5,
  rowsAfterBall: 7,
  gameStatus: 0,
});

export const MyContextProvider = MyContext.Provider;

export function useMyContext() {
  return useContext(MyContext);
}
