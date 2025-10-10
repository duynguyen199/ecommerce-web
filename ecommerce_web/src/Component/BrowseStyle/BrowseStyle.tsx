import React from "react";
import causalImg from "../../assets/img/causal.png";
import partyImg from "../../assets/img/party.png";
import formalImg from "../../assets/img/formal.png";
import gymImg from "../../assets/img/gym.png";
import { BrowseStyleItem } from "./BrowseStyleItem";

type Props = {};

const arr = [
  { id: 1, title: "Causal", img: causalImg, grid:"col-span-1" },
  { id: 2, title: "Formal", img: formalImg,grid:"col-span-2"  },
  { id: 3, title: "Party", img: partyImg,grid:"col-span-2"  },
  { id: 4, title: "Gym", img: gymImg,grid:"col-span-1"  },
];
const BrowseStyle = (props: Props) => {
  return (
    <div className="bg-[#F0F0F0] rounded-[40px]">
      <h1 className="text-[48px] text-black font-[700] text-center">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {arr.map((item) => (
          <BrowseStyleItem
            key={item.id}
            title={item.title}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseStyle;
