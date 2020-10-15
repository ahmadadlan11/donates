import React, { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";
import { user, lock, calender } from "../assets/icons";
import CustomInput from "./input";
import { keyContext } from "../Store/KeyProvider";
import { ErrorContext } from "../Store/ErrorProvider";
import JSencrypt from "jsencrypt";
const Form = () => {
  const [key, setKey] = useContext(keyContext);
  const [, setError] = useContext(ErrorContext);
  const [information, setInformation] = useState({
    PAN: "",
    PIN: "",
    expDate: "",
  });
  const getKey = async () => {
    const results = await fetch("https://beta.soluspay.net/api/consumer/key", {
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
    const body = await results.json();
    if (results.status !== 200) {
      setError(body.details.responseMessage);
    } else setKey(body.ebs_response.pubKeyValue);
  };
  useEffect(() => {
    getKey();
    console.log(information);
  }, [information]);

  const generateIPin = (pin, key) => {
    // do something
    console.log("the key is: ", key);
    let id = v4();
    let jsencrypt = new JSencrypt();
    jsencrypt.setPublicKey(key);
    let data = jsencrypt.encrypt(id + pin);
    console.log("the private key encrypted is: ", data);
    return { data, id };
  };

  return (
    <div className="flex items-center flex-col gap-4">
      <CustomInput
        icon={user}
        maxLength={19}
        minLength={16}
        placeholder="PAN"
        returndValue={(value) =>
          setInformation({
            PAN: value,
            PIN: information.PIN,
            expDate: information.expDate,
          })
        }
      />

      <CustomInput
        icon={lock}
        maxLength={4}
        type="password"
        placeholder="PIN"
        returndValue={(value) =>
          setInformation({
            PAN: information.PAN,
            PIN: value,
            expDate: information.expDate,
          })
        }
      />

      <CustomInput
        icon={calender}
        placeholder="Expire Date"
        calander
        maxLength="7"
        returndValue={(value) =>
          setInformation({
            PAN: information.PAN,
            PIN: information.PIN,
            expDate: value,
          })
        }
      />
      <button
        className={`transition duration-500 w-64 ${
          (key && "from-buttonFrom bg-gradient-to-r to-buttonTo") ||
          "bg-gray-500"
        }   h-12 rounded-lg  text-white flex items-center justify-center font-semibold
        hover:shadow-lg`}
        onClick={() => console.log(generateIPin(information.PIN, key).data)}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
