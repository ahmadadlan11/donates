import React from "react";
import ErrorProvider from "./ErrorProvider";
import LanguageProvider from "./LanguageProvider";
import LoadingProvider from "./LoadingProvider";
import ModalProvider from "./ModalProvider";

const Store = ({ children }) => {
  return (
    <LanguageProvider>
      <ErrorProvider>
        <ModalProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </ModalProvider>
      </ErrorProvider>
    </LanguageProvider>
  );
};

export default Store;
