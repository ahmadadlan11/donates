import React from "react";

const CustomInput = ({ placeholder, returndValue, validation }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-white placeholder-black h-10 w-full rounded-md border-gray-500
       border-2 px-10"
    />
  );
};

export default CustomInput;
