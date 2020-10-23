import React, { useState, createContext } from "react";
export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState(null);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModal = async (callback) => {};

  const modalResult = async (action) => {
    if (action == "Cancel") {
      return false;
    } else return true;
  };

  return (
    <ModalContext.Provider value={[isModalOpen, toggleModal, modalResult]}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
