import React, { useContext } from "react";
import { upperCircle, bottomCircle } from "./App/assets/BackGrounds";
import Home from "./App/Screens/Home";
import Errors from "./App/Components/Errors";
import Loading from "./App/Components/Loading";
import Modal from "./App/Components/Modal";
import { LanguageIcon } from "./App/assets/icons";
import { LanguageContext } from "./App/Store/LanguageProvider";

const App = () => {
  const [language, toggleLanguage] = useContext(LanguageContext);
  return (
    <div
      className="bg-background h-screen flex justify-center items-center"
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <button
        className="absolute top-0 right-0 m-8 z-30 flex items-center gap-4"
        onClick={() => toggleLanguage()}
      >
        <LanguageIcon language={language} />
      </button>
      {/* Show errors message */}
      <Errors />
      {/* Show loading state */}
      <Loading />
      {/* BackGrounds images */}
      {upperCircle}
      {bottomCircle}
      {/* Home component */}
      <Modal />
      <Home />
    </div>
  );
};

export default App;
