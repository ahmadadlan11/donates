import React, { useContext } from "react";
import { ErrorContext } from "../Store/ErrorProvider";

const Errors = () => {
  const [error] = useContext(ErrorContext);
  const errorColors = () => {
    switch (error.type) {
      case "error":
        return "bg-red-600";
      case "success":
        return "bg-green-600";
      case "warning":
        return "bg-yellow-600";
    }
  };
  return (
    <div
      className={`transform duration-500 absolute z-10 lg:w-1/2 w-2/3 h-12 ${errorColors()} top-0 shadow-lg flex items-center rounded-md
        justify-center font-semibold text-white text-xl ${
          error ? "translate-y-0 mt-2" : "-translate-y-12 shadow-none"
        } `}
    >
      {error.message}
    </div>
  );
};

export default Errors;
