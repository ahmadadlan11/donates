import React, { useContext } from "react";
import { alert } from "../assets/icons";
import { ModalContext } from "../Store/ModalProvider";
import qs from "query-string";

const Modal = () => {
  const [isModalOpen, toggleModal, isConfirmed] = useContext(ModalContext);

  const params = qs.parse(window.location.search);

  return (
    <>
      <div
        className={`transition-opacity duration-1000 absolute w-screen h-screen bg-oranges-light bg-opacity-25 z-30 flex justify-center items-center ${
          isModalOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => toggleModal()}
      ></div>
      <div
        className={`transition-opacity duration-1000 w-2/3 lg:w-1/3 absolute z-40
      ${isModalOpen ? "visible opacity-100" : "invisible opacity-0"}
      `}
      >
        <div
          className="w-20 h-20 bg-oranges-light absolute transform -translate-y-12 inset-x-0 mx-auto rounded-full shadow-lg
          flex justify-center items-center"
        >
          {alert}
        </div>
        <div className="w-full h-64 bg-white rounded-md shadow-lg px-10 py-10 flex flex-col justify-between items-center ">
          <div className="font-semibold text-2xl text-gray-600">
            Are you sure ?
          </div>
          <div className="text-gray-500 text whitespace-pre-line">
            Pay {"  "}
            <span className="text-lg font-bold text-oranges-deeper">
              {"  "}
              {params.amount}
              {"  "}
            </span>
            {"  "}SDG
          </div>
          <div className="flex justify-between w-full">
            <button
              onClick={() => toggleModal()}
              className="bg-gray-500 w-24 h-10 rounded-md shadow-sm text-white font-semibold "
            >
              Cancel
            </button>
            <button
              onClick={() => isConfirmed()}
              className="bg-green-500 w-24 h-10 rounded-md shadow-sm text-white font-semibold "
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
