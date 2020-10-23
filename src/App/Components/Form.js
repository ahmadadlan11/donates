import React, { useState } from "react";
import { user, lock, calender, loadingState } from "../assets/icons";
import CustomInput from "./input";
import qs from "query-string";
import useApi from "../API/useApi";

const Form = () => {
  const { key, handleSubmit } = useApi();
  const [PAN, setPAN] = useState("2222222222323232");
  const [PIN, setPIN] = useState("1331");
  const [expDate, setexpDate] = useState("1231/23");

  const params = qs.parse(window.location.search);

  let isValidate = key && PAN && PIN && expDate && true;

  return (
    <div className="flex items-center flex-col gap-4">
      <CustomInput
        icon={user}
        maxLength={19}
        minLength={16}
        placeholder="PAN"
        returndValue={(value) => setPAN(value)}
      />

      <CustomInput
        icon={lock}
        maxLength={4}
        type="password"
        placeholder="PIN"
        returndValue={(value) => setPIN(value)}
      />

      <CustomInput
        icon={calender}
        placeholder="Expire Date"
        calander
        maxLength="7"
        returndValue={(value) => setexpDate(value)}
      />
      <button
        type="submit"
        className={`transition duration-500 w-64 ${
          (isValidate && "bg-oranges-deeper") || "bg-gray-500"
        }   h-12 rounded-lg  text-white flex items-center justify-center font-semibold
        hover:shadow-lg`}
        onClick={() => {
          handleSubmit({ params, PAN, PIN, expDate });
          // document.location = "js://webview?arg1=111&args2=222";
        }}
        disabled={!isValidate}
      >
        {(key && "Submit") || loadingState()}
      </button>
    </div>
  );
};

export default Form;
