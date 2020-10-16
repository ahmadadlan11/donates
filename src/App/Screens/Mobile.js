import React, { useContext } from "react";
import SOLUSPAY from "../assets/SOLUSPAY";
import Form from "../Components/Form";
//!deprecated
const Mobile = () => {
  return (
    <div className=" lg:hidden z-50 relative bg-white rounded-lg w-2/3 shadow-lg">
      <div className="flex items-center flex-col py-8 gap-4 px-5">
        <div className="uppercase font-semibold text-gray-600">welcome to</div>
        {SOLUSPAY}
        <p className="font-thin text-black text-lg text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea omnis
          temporibus fuga
        </p>
        <Form />
      </div>
    </div>
  );
};

export default Mobile;
