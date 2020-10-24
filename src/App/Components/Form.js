import React, { useState, useContext, useEffect } from "react";
import { user, lock, calender, loadingState } from "../assets/icons";
import CustomInput from "./input";
import qs from "query-string";
import useApi from "../API/useApi";
import { ModalContext } from "../Store/ModalProvider";

const Form = () => {
  const [, toggleModal, , action] = useContext(ModalContext);

  const { key, handleSubmit } = useApi();

  const [PAN, setPAN] = useState("");
  const [PIN, setPIN] = useState("");
  const [expDate, setexpDate] = useState("");

  const params = qs.parse(window.location.search);

  let isValidate = key && PAN && PIN && expDate && true;

  useEffect(() => {
    if (action && isValidate) handleSubmit({ params, PAN, PIN, expDate });
  }, [action]);

  return (
    <form className="flex items-center flex-col gap-4">
      <CustomInput
        icon={user}
        maxLength={19}
        minLength={16}
        name="pan"
        placeholder="PAN"
        returndValue={(value) => setPAN(value)}
      />

      <CustomInput
        icon={lock}
        maxLength={4}
        name="password"
        type="password"
        placeholder="PIN"
        name="pin"
        returndValue={(value) => setPIN(value)}
      />

      <CustomInput
        icon={calender}
        placeholder="Expire Date"
        calander
        maxLength="7"
        name="date"
        returndValue={(value) => setexpDate(value)}
      />
      <button
        type="submit"
        className={`transition duration-500 w-64 ${
          (isValidate && "bg-oranges-deeper") || "bg-gray-500"
        }   h-12 rounded-lg  text-white flex items-center justify-center font-semibold
        hover:shadow-lg`}
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
          // document.location = "js://webview?arg1=111&args2=222";
        }}
        disabled={!isValidate}
      >
        {(key && "Submit") || loadingState()}
      </button>
    </form>
  );
};

export default Form;
