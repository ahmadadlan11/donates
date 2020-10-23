import React, { useContext } from "react";
import { alert } from "../assets/icons";
import { ModalContext } from "../Store/ModalProvider";
const Modal = () => {
  const [isModalOpen, toggleModal] = useContext(ModalContext);
  return (
    <>
      <div
        className={`absolute w-screen h-screen bg-oranges-light bg-opacity-25 z-30 flex justify-center items-center ${
          isModalOpen ? "visible" : "invisible"
        }`}
        onClick={() => console.log("object")}
      ></div>
      <div className="w-2/3 lg:w-1/3 absolute z-40">
        <div
          className="w-20 h-20 bg-oranges-light absolute transform -translate-y-12 inset-x-0 mx-auto rounded-full shadow-lg
          flex justify-center items-center"
        >
          {alert}
        </div>
        <div className="w-full h-64 bg-white rounded-md shadow-lg px-10 flex justify-between py-12">
          <button>ok</button>
          <button> nobe</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
