import React from "react";

type Props = {
  textColor: string;
  bRadius: string;
  bgColor: string;
  width: string;
  height: string;
  text: string;
};

const ButtonSubmit = ({
  text,
  textColor,
  bRadius,
  width,
  height,
  bgColor,
}: Props) => {
  return (
    <button
      style={{
        color: textColor,
        borderRadius: bRadius,
        width: width, 
        height: height, 
        backgroundColor: bgColor,
      }}
      className="font-medium focus:outline-none"
    >
      {text}
    </button>
  );
};

export default ButtonSubmit;
