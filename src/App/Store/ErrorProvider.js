import React, { createContext, useState } from "react";
export const ErrorContext = createContext();
const ErrorProvider = ({ children }) => {
  const [error, setError] = useState({ error: false, message: undefined });
  const toggleError = (message) => {
    setError({ error: true, message: message });
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
