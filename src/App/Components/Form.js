import React, { useContext, useEffect, useState, useCallback } from "react";
import { user, lock, calender, loadingState } from "../assets/icons";
import CustomInput from "./input";
import { keyContext } from "../Store/KeyProvider";
import { ErrorContext } from "../Store/ErrorProvider";
import JSencrypt from "jsencrypt";
import qs from "query-string";
import { v4 } from "uuid";
import { LoadingContext } from "../Store/LoadingProvider";
const Form = () => {
  console.log("%c%s", "color: #00a3cc", "re-render");
  const [key, setKey] = useContext(keyContext);
  const [, toggleError] = useContext(ErrorContext);
  const [, toggleLoading] = useContext(LoadingContext);
  const [PAN, setPAN] = useState("2222222222323232");
  const [PIN, setPIN] = useState("1331");
  const [expDate, setexpDate] = useState("1231/23");

  const params = qs.parse(window.location.search);

  let isValidate = key && PAN && PIN && expDate;

  const getKey = async () => {
    console.log("%c%s", "color: #00bf00", "getKey");
    let results;
    try {
      results = await fetch("https://beta.soluspay.net/api/consumer/key", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationId: "ACTSCon",
          UUID: v4(),
          tranDateTime: "191230142400",
        }),
      });
    } catch (error) {
      toggleError("try again later");
      return;
    }
    const body = await results.json();
    if (!results.ok) {
      toggleError(body.details.responseMessage);
    } else setKey(body.ebs_response.pubKeyValue);
  };
  useEffect(() => {
    getKey();
  }, []);

  const generateIPin = (pin, key) => {
    console.log("the key is: ", key);
    let id = v4();
    let jsencrypt = new JSencrypt();
    jsencrypt.setPublicKey(key);
    let IPIN = jsencrypt.encrypt(id + pin);
    console.log("the private key encrypted is: ", IPIN);
    return { IPIN, id };
  };

  const handleSubmit = async () => {
    toggleLoading(true);
    const { IPIN, id } = generateIPin(PIN, key);
    let results;
    try {
      results = await fetch(
        `https://beta.soluspay.net/api/v1/payment/sahil?id=${params.id}&token=${params.token}`,
        {
          method: "POST",
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            applicationId: "ACTSCon",
            tranDateTime: "191230142400",
            UUID: id,
            PAN,
            IPIN,
            expDate: expDate.split("/").join("").slice(2, 6),
            tranAmount: parseFloat(params.amount),
            serviceProviderId: "0010060207",
            tranCurrencyCode: "SDG",
            id: params.id,
          }),
        }
      );
    } catch (error) {
      console.log(error);
      toggleError("try again later", "error");
      toggleLoading(false);
      return;
    }
    const error = qs.parse(results.url.split("?")[1]);
    if (error.fail) {
      toggleLoading(false);
      toggleError(error.code, "error");
      return;
    } else toggleError("i think its success", "success");
    toggleLoading(false);
  };

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
          (isValidate && "bg-buttonTo") || "bg-gray-500"
        }   h-12 rounded-lg  text-white flex items-center justify-center font-semibold
        hover:shadow-lg`}
        onClick={() => {
          handleSubmit();
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
