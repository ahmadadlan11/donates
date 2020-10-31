import { useState, useContext, useEffect } from "react";
import { v4 } from "uuid";
import JSencrypt from "jsencrypt";
import qs from "query-string";

import { ErrorContext } from "../Store/ErrorProvider";
import { LoadingContext } from "../Store/LoadingProvider";
import { LanguageContext } from "../Store/LanguageProvider";

const useApi = () => {
  const [key, setKey] = useState();
  const { toggleError } = useContext(ErrorContext);
  const { setIsLoading } = useContext(LoadingContext);
  const { t } = useContext(LanguageContext);

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
      toggleError(t(`error.${results.status.toString()}`), "error");
    } else setKey(body.ebs_response.pubKeyValue);
  };

  const getToken = async () => {
    let results;
    try {
      results = await fetch("https://api.soluspay.net/api/v1/payment_token", {
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
      toggleError(t(`error.${results.status.toString()}`), "error");
    } else return { token: body.result.id };
  };

  useEffect(() => {
    getKey();
  }, []);

  const handleSubmit = async ({ params, PAN, PIN, expDate }) => {
    setIsLoading(true);
    const { IPIN, id } = generateIPin(PIN, key);
    const { token } = await getToken();
    let results;
    try {
      results = await fetch(
        `https://api.soluspay.net/api/v1/payment/${params.pathname}?id=${params.id}&token=${token}&amount=${params.amount}&json=true`,
        {
          method: "POST",
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
            // id: params.id, for later use
          }),
        }
      );
    } catch (error) {
      toggleError("try again later", "error");
    }

    setIsLoading(false);

    if (!results.ok) {
      toggleError(t(`error.${results.status.toString()}`), "error");
    } else toggleError("Payment was successful", "success");
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
