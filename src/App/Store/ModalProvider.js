import React, { useState, createContext, useEffect, useMemo } from "react";
export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const isConfirmed = () => {
    setAction(true);
    toggleModal();
  };

  useEffect(() => {
    setAction(false);
  }, [action]);

  const values = useMemo(
    () => ({
      isModalOpen,
      toggleModal,
      isConfirmed,
      action,
    }),
    [isModalOpen]
  );

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
