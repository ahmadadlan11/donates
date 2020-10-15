import React from "react";
import Logo from "../assets/logo.png";
import { user, lock, calender } from "../assets/icons";
import SOLUSPAY from "../assets/SOLUSPAY";
import CustomInput from "../Components/input";

const Desktop = () => {
  return (
    <div className="lg:block hidden">
      <div className="bg-white shadow-lg flex justify-between rounded-lg  h-screen/2 z-50 relative">
        <div className="bg-white rounded-lg h-full w-1/3 ">
          <div className="flex items-center flex-col py-8 gap-6">
            <div className="uppercase font-semibold text-gray-600">
              welcome to
            </div>
            {SOLUSPAY}

            <CustomInput
              icon={user}
              maxLength={19}
              minLength={16}
              placeholder="PAN"
            />

            <CustomInput
              icon={lock}
              maxLength={4}
              type="password"
              placeholder="PIN"
            />

            <CustomInput
              icon={calender}
              placeholder="Expire Date"
              calander
              maxLength="7"
            />
          </div>
        </div>
        <div className="bg-orang bg-opacity-75 w-2/3 rounded-r-lg flex flex-col items-center py-10 gap-10 px-10">
          <img src={Logo} className="w-32" />
          <p className="font-semibold text-white text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea omnis
            temporibus fuga <br /> suscipit sed accusamus nobis totam debitis,
            dolorem possimus dicta nemo deserunt,
            <br /> excepturi vero, neque quibusdam error dolore sunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
