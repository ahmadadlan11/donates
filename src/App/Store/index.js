import React from "react";
import ErrorProvider from "./ErrorProvider";
import LoadingProvider from "./LoadingProvider";
import ModalProvider from "./ModalProvider";

const Store = ({ children }) => {
  return (
    <ErrorProvider>
      <ModalProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </ModalProvider>
    </ErrorProvider>
  );
};

export default Store;
