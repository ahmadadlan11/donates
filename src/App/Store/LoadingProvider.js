import React, { createContext, useState, useMemo } from "react";
export const LoadingContext = createContext();
const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const values = useMemo(
    () => ({
      isLoading,
      setIsLoading,
    }),
    [isLoading]
  );
  return (
    <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>
  );
};

export default LoadingProvider;
