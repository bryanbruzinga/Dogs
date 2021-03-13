import React from "react";

export const UserContext = React.createContext(null);

export const UserStorage = ({ children }) => {
  return (
    <UserContext.Provider value={{ usuario: "Bryan" }}>
      {children}
    </UserContext.Provider>
  );
};
