import React from "react";
import ErrorProvider from "./ErrorProvider";
import KeyProvider from "./KeyProvider";
import LoadingProvider from "./LoadingProvider";

const Store = ({ children }) => {
  return (
    <ErrorProvider>
      <KeyProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </KeyProvider>
    </ErrorProvider>
  );
};

export default Store;
