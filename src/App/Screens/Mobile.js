import React from "react";
import { user, lock, calender } from "../assets/icons";
import SOLUSPAY from "../assets/SOLUSPAY";
import CustomInput from "../Components/input";

const Mobile = () => {
  return (
    <div className=" lg:hidden z-50 relative bg-white rounded-lg w-2/3 shadow-lg">
      <div className="flex items-center flex-col py-8 gap-4 px-5">
        <div className="uppercase font-semibold text-gray-600">welcome to</div>
        {SOLUSPAY}
        <p className="font-thin text-black text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea omnis
          temporibus fuga
        </p>
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

        <div
          className="w-64 from-buttonFrom bg-gradient-to-r to-buttonTo h-12 rounded-lg  text-white flex items-center justify-center font-semibold
        hover:shadow-lg pointer-events-none"
        >
          Submit
        </div>
      </div>
    </div>
  );
};

export default Mobile;
