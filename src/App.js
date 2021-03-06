import React, { useContext } from "react";
import { upperCircle, bottomCircle } from "./App/assets/BackGrounds";
import Home from "./App/Screens/Home";
import Errors from "./App/Components/Errors";
import Loading from "./App/Components/Loading";
import Modal from "./App/Components/Modal";
import { LanguageIcon } from "./App/assets/icons";
import { LanguageContext } from "./App/Store/LanguageProvider";
import LOGO from "./App/assets/SOLUSPAY";

const App = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div
      className="bg-background h-screen flex justify-center items-center"
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <button
        className="absolute top-0 right-0 m-8 z-30 flex flex-col items-center justify-center"
        onClick={() => toggleLanguage()}
      >
        <div>
          <LanguageIcon language={language} />
        </div>
        <div className="font-bold text-lg">
          {language === "en" ? "English" : "عربي"}
        </div>
      </button>
      {/* Show errors message */}
      <Errors />
      {/* Show loading state */}
      <Loading />
      {/* LOGO */}
      {/* BackGrounds images */}
      {upperCircle}
      {bottomCircle}
      {/* Home component */}
      <Modal />
      <div className="h-full flex flex-col justify-evenly items-center">
        {LOGO}
        <Home />
      </div>
    </div>
  );
};

export default App;
