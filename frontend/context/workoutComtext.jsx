import { createContext } from "react";

export const workoutContext = createContext();

export const workoutContextProvider = ({ children }) => {
  return <workoutContext.Provider>{children}</workoutContext.Provider>;
};
