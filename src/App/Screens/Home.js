import React from "react";
import Logo from "../assets/logo.png";
import { user, lock, calender } from "../assets/icons";
import SOLUSPAY from "../assets/SOLUSPAY";
import CustomInput from "../Components/input";
import Form from "../Components/Form";

const Home = () => {
  console.log("%c%s", "color: #e50000", "Home re-render");
  return (
    <div className="lg:w-2/3 w-1/3">
      <div className="bg-white lg:shadow-lg flex lg:justify-between lg:w-auto justify-center rounded-lg  z-0 relative">
        <div className="bg-white rounded-lg lg:w-1/3 shadow-lg lg:shadow-none">
          <div className="flex items-center flex-col py-8 gap-6 lg:px-0 px-5">
            <div className="uppercase font-semibold text-gray-600">
              welcome to
            </div>
            {SOLUSPAY}
            <p className="font-thin text-black text-lg text-center lg:hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea omnis
              temporibus fuga
            </p>
            <Form />
          </div>
        </div>
        <div className="bg-orang bg-opacity-75 w-2/3 rounded-r-lg  flex-col items-center py-10 gap-10 px-10 hidden lg:flex">
          <img src={Logo} className="w-32" />
          <p className="font-semibold text-white text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea omnis
            temporibus fuga suscipit sed accusamus nobis totam debitis, dolorem
            possimus dicta nemo deserunt,
            <br /> excepturi vero, neque quibusdam error dolore sunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
