import React, { createContext, useState, useMemo } from "react";
export const LoadingContext = createContext();
const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading]
  );
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
