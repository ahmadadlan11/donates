import React, { useEffect, useState, useContext } from "react";
import { ErrorContext } from "../Store/ErrorProvider";
import { LanguageContext } from "../Store/LanguageProvider";

const CustomInput = ({
  icon,
  placeholder,
  returndValue,
  maxLength,
  minLength,
  type = "text",
  calander = false,
  name,
}) => {
  const [value, setValue] = useState("");
  const { toggleError } = useContext(ErrorContext);
  const { t } = useContext(LanguageContext);
  const [error, setError] = useState(false);
  const setValueFuction = (value) => {
    setValue(value);
    returndValue(value);
  };
  useEffect(() => {
    if (calander) {
      window.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
          setValueFuction("");
        }
      });
    }
  }, []);

  const validation = (value) => {
    if (isNaN(value) && !calander) {
      toggleError(t("Invalid input"), "warning");
      return;
    } else setValueFuction(value);

    if (minLength && value.length < minLength) {
      setError(true);
    } else setError(false);

    if (calander) {
      isNaN(value) &&
        value.length < 4 &&
        toggleError(t("Invalid input"), "warning");
      value.length === 4
        ? setValueFuction(value + "/")
        : setValueFuction(value);
    }
  };
  return (
    <div className="">
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-1 pt-2">
          {icon}
        </span>
        <input
          name={name}
          required
          maxLength={maxLength}
          minLength={minLength}
          type={type}
          id={placeholder}
          className="mt-2 border border-gray-500 rounded-lg px-10 w-64 h-10"
          placeholder={placeholder}
          onChange={(e) => validation(e.target.value)}
          value={value}
        />
      </div>
      <span className="text-red-600 font-semibold">
        {error && t("PAN should be 16 or 19 digits")}
      </span>
    </div>
  );
};

export default CustomInput;
