import React from "react";
import ButtonSubmit from "../../../Component/Button/ButtonSubmit";

type Props = {};

const UpdatePart = (props: Props) => {
  return (
    <div className="bg-black w-[85%] flex justify-between items-center flex-row ">
      <div className="ml-16">
        <h1 className="text-[40px] mx-16  text-white font-bold leading-relaxed">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>
      <div className="my-8 mx-18">
        <div className="mb-6">
          {" "}
          <ButtonSubmit
            width="349px"
            height="48px"
            textColor="#00000066"
            text="Enter your email address"
            bgColor="white"
            bRadius="62px"
          ></ButtonSubmit>
        </div>

        <div>
          {" "}
          <ButtonSubmit
            width="349px"
            height="48px"
            textColor="#000000"
            text="Subscribe to Newsletter"
            bgColor="white"
            bRadius="62px"
          ></ButtonSubmit>
        </div>
      </div>
    </div>
  );
};

export default UpdatePart;
