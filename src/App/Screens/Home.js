import React, { useContext } from "react";
import LOGO from "../assets/SOLUSPAY";
import Form from "../Components/Form";
import { LanguageContext } from "../Store/LanguageProvider";

const Home = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="w-1/3 ">
      <div className="bg-white flex justify-center rounded-lg  z-0 relative">
        <div className="bg-white rounded-lg  shadow-lg border-border border-2 border-collapse border-opacity-75">
          <div className="flex items-center flex-col py-8 gap-6  px-5">
            <div className="uppercase font-semibold text-gray-600">
              {t("welcome to")}
            </div>

            <p className="font-thin text-black text-lg text-center">
              {t("shortDescription")}
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
