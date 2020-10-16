import React, { useContext } from "react";
import { loadingState } from "../assets/icons";
import { LoadingContext } from "../Store/LoadingProvider";

const Loading = () => {
  const [loading] = useContext(LoadingContext);
  return (
    <div
      className={`bg-black bg-opacity-75 ${
        loading ? "flex" : "hidden"
      }  items-center justify-center w-screen h-screen absolute z-50 `}
    >
      {loadingState({ large: true })}
    </div>
  );
};

export default Loading;
