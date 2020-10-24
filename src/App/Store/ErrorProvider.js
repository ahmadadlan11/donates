import React, { createContext, useState } from "react";
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
    }, 5000);
  };
  return (
    <ErrorContext.Provider value={[error, toggleError]}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
