import React from "react";
import causalImg from "../../assets/img/causal.png";
import partyImg from "../../assets/img/party.png";
import formalImg from "../../assets/img/formal.png";
import gymImg from "../../assets/img/gym.png";
import { BrowseStyleItem } from "./BrowseStyleItem";

type Props = {};

const arr = [
  { id: 1, title: "Causal", img: causalImg, grid: "col-span-1" },
  { id: 2, title: "Formal", img: formalImg, grid: "col-span-2" },
  { id: 3, title: "Party", img: partyImg, grid: "col-span-2" },
  { id: 4, title: "Gym", img: gymImg, grid: "col-span-1" },
];
const BrowseStyle = (props: Props) => {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="bg-[#F0F0F0] w-[90%]  rounded-[40px]">
        <h1 className="text-[48px] my-12 text-black font-[700] text-center">
          BROWSE BY DRESS STYLE
        </h1>
        <div
          className="    grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-6 mx-[50px] my-8"
        >
          {arr.map((item) => (
            <BrowseStyleItem key={item.id} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
