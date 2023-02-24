import React from "react";
import UserInput from "./UserInputs";
import Android from "public/Android.png";
import favicon from "public/favicon.png";

import Image from "next/image";

// import Apple from "../../../assets/Iphone.svg";

function Growth() {
  const [platform, setPlatform] = React.useState("Android");

  return (
    <div className="m-10   ">
      <p className="text-[#A259FF] font-semibold text-2xl mx-6">
        The next viral campaign is just a click away...
      </p>
      <p className="text-[#000]  text-xl py-4 mx-6">
        Give us a brief and create the next viral push campaign under{" "}
        <span className="font-bold"> 60 seconds</span>.{" "}
      </p>
      <div className="flex w-full items-start">
        <UserInput />
      </div>
    </div>
  );
}

export default Growth;
