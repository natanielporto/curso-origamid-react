import React, { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalItems = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ nome: "Carai" }}>
      {children}
    </GlobalContext.Provider>
  );
};
