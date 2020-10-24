import React from "react";
import { upperCircle, bottomCircle } from "./App/assets/BackGrounds";
import Home from "./App/Screens/Home";
import Errors from "./App/Components/Errors";
import Loading from "./App/Components/Loading";
import Modal from "./App/Components/Modal";

const App = () => {
  return (
    <div
      className="bg-background h-screen flex justify-center items-center"
      dir="rtl"
    >
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
