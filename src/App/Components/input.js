import React, { useState } from "react";

const CustomInput = ({ placeholder, returndValue, validation }) => {
  const [date, setdate] = useState("");
  return (
    <input
      type="text"
      onChange={(e) => setdate(e.target.value)}
      value={date}
      placeholder={placeholder}
      className="bg-white placeholder-black h-10 w-full rounded-md border-gray-500
       border-2 px-10"
    />
  );
};

export default CustomInput;
