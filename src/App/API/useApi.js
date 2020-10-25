import { useState, useContext, useEffect } from "react";
import { v4 } from "uuid";
import JSencrypt from "jsencrypt";
import qs from "query-string";

import { ErrorContext } from "../Store/ErrorProvider";
import { LoadingContext } from "../Store/LoadingProvider";

const useApi = () => {
  const [key, setKey] = useState();
  const [, toggleError] = useContext(ErrorContext);
  const { setIsLoading } = useContext(LoadingContext);

  const getKey = async () => {
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
    }
    const body = await results.json();
    if (!results.ok) {
      toggleError(body.details.responseMessage, "error");
    } else setKey(body.ebs_response.pubKeyValue);
  };
  useEffect(() => {
    getKey();
  }, []);

  const handleSubmit = async ({ params, PAN, PIN, expDate }) => {
    setIsLoading(true);
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
      toggleError("try again later", "error");
    }
    setIsLoading(false);
    const error = qs.parse(results.url.split("?")[1]);

    if (error.fail) {
      toggleError(error.code, "error");
    } else toggleError("i think its success", "success");
  };

  return { key, handleSubmit };
};

const generateIPin = (pin, key) => {
  const id = v4();
  const jsencrypt = new JSencrypt();
  jsencrypt.setPublicKey(key);
  const IPIN = jsencrypt.encrypt(id + pin);
  return { IPIN, id };
};

export default useApi;
