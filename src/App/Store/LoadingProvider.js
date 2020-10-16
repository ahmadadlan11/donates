import React, { createContext, useState } from "react";
export const LoadingContext = createContext();
const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => {
    setLoading(!loading);
    console.log("%c%s", "color: #0088cc", loading);
  };
  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
