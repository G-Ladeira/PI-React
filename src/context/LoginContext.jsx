import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState();
  

  return (
    <LoginContext.Provider
      value={{ email, setEmail }}
    >
      {children}
    </LoginContext.Provider>
  );
};