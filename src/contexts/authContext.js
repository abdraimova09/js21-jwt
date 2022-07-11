import React, { useState } from "react";
import axios from "axios";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};
export default AuthContextProvider;
