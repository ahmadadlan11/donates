import React, { createContext, useState } from "react";
export const keyContext = createContext();
const KeyProvider = ({ children }) => {
  const [key, setKey] = useState(undefined);
  return (
    <keyContext.Provider value={[key, setKey]}>{children}</keyContext.Provider>
  );
};

export default KeyProvider;
