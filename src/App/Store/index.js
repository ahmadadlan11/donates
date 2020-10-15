import React from "react";
import ErrorProvider from "./ErrorProvider";
import KeyProvider from "./KeyProvider";

const Store = ({ children }) => {
  return (
    <ErrorProvider>
      <KeyProvider>{children}</KeyProvider>
    </ErrorProvider>
  );
};

export default Store;
