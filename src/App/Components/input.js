import React, { useEffect, useState, useContext } from "react";
import { ErrorContext } from "../Store/ErrorProvider";

const CustomInput = ({
  icon,
  placeholder,
  returndValue,
  // validation,
  maxLength,
  minLength,
  type = "text",
  calander = false,
}) => {
  const [value, setValue] = useState("");
  const [, toggleError] = useContext(ErrorContext);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (calander) {
      window.addEventListener("keydown", (event) => {
        if (event.key == "Backspace") {
          setValue("");
        }
      });
    }
  }, []);

  const validation = (value) => {
    if (isNaN(value) && !calander) {
      toggleError("Invalid input");
      return;
    } else setValue(value);

    if (minLength && value.length < minLength) {
      setError(true);
    } else setError(false);

    if (calander) {
      value.length === 4 ? setValue(value + "/") : setValue(value);
    }
  };
  return (
    <div className="">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-1">
          {icon}
        </span>
        <input
          required
          maxLength={maxLength}
          minLength={minLength}
          type={type}
          id={placeholder}
          className="border border-gray-500 rounded-lg px-10 w-64 h-10"
          placeholder={placeholder}
          onChange={(e) => validation(e.target.value)}
          value={value}
        />
      </div>
      <span className="text-red-600 font-semibold">
        {error && "PAN should be 16 or 19 digits"}
      </span>
    </div>
  );
};

export default CustomInput;
