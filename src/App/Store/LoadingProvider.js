import React, { createContext, useState } from "react";
export const LoadingContext = createContext();
const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => {
    setLoading(!loading);
  };
  return (
    <LoadingContext.Provider value={[loading, setLoading]}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
