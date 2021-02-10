import React, { createContext, useMemo, useState } from "react";
export const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState({
    error: false,
    message: undefined,
    type: "warning",
  });
  const toggleError = (message, type) => {
    setError({ error: true, message, type });
    setTimeout(() => {
      setError({ error: false });
    }, 9000);
  };
  const values = useMemo(
    () => ({
      error,
      toggleError,
    }),
    [error]
  );
  return (
    <ErrorContext.Provider value={values}>{children}</ErrorContext.Provider>
  );
};

export default ErrorProvider;
