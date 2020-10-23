import React, { useState, createContext, useEffect } from "react";
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

  return (
    <ModalContext.Provider
      value={[isModalOpen, toggleModal, isConfirmed, action]}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
