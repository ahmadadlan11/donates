import React from "react";
import LOGO from "../assets/SOLUSPAY";
import Form from "../Components/Form";

const Home = () => {
  return (
    <div className="lg:w-2/3 w-1/3">
      <div className="bg-white lg:shadow-lg flex lg:justify-between lg:w-auto justify-center rounded-lg  z-0 relative">
        <div className="bg-white rounded-lg lg:w-1/3 shadow-lg lg:shadow-none">
          <div className="flex items-center flex-col py-8 gap-6 lg:px-0 px-5">
            <div className="uppercase font-semibold text-gray-600">
              welcome to
            </div>
            <div className="tracking-widest text-3xl font-bold uppercase">
              <span className="text-oranges-light">sol</span>
              <span className="text-oranges-deep">us</span>
              <span className="text-oranges-deeper">pay</span>
            </div>
            <p className="font-thin text-black text-lg text-center lg:hidden">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea omnis
              temporibus fuga
            </p>
            <Form />
          </div>
        </div>
        <div className="bg-oranges-deep bg-opacity-75 w-2/3 rounded-r-lg  flex-col items-center py-10 gap-10 px-10 hidden lg:flex">
          {LOGO}
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
