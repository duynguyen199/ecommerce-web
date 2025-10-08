import React from "react";
import "./HomePageHeader.css";
import IconX from "../../assets/icon/IconX";
import SearchBar from "../SearchBar/SearchBar";
import IconCard from "../../assets/icon/IconCard";
import IconProfile from "../../assets/icon/IconProfile";
type Props = {};

const arr = [
  {
    id: 1,
    name: "Shop",
  },
  {
    id: 2,
    name: "On Sales",
  },
  {
    id: 3,
    name: "New Arrival",
  },
  {
    id: 4,
    name: "Brands",
  },
];
const HomePageHeader = (props: Props) => {
  return (
    <>
      <div className=" w-full text-white h-[38px] flex justify-between bg-black  items-center ">
        <div></div>
        <div className="flex items-center header-ad text-[12px] md:text-[14px]">
          <p>Sign up and get 20% off to your first order. </p>
          <p className="underline"> Sign Up Now</p>
        </div>
        <div className="underline ml-1 cursor-pointer pr-[100px]">
          <IconX className="ml-auto cursor-pointer" />
        </div>
      </div>

      <div className="flex py-6 items-center w-full justify-between md:justify-around px-[20px] md:px-8  ">
        <p className="text-green font-bold text-[25px] md:text-[40px] pr-[40px] ">
          SHOP.CO
        </p>
        <ul className="hidden lg:flex ">
          {arr.map((item) => {
            return (
              <li className=" px-[24px] " key={item.id}>
                {item.name}
              </li>
            );
          })}
        </ul>
        <div className="px-[10x] hidden lg:hidden md:block xl:block ">
          <SearchBar
            bgColor="#F0F0F0"
            width="577px"
            height="48px"
            placeholder="Search For Products..."
            color="rgba(0, 0, 0, 0.4)"
          />
        </div>

        <div className="flex items-center justify-space-between">
          {" "}
          <IconCard className="icon-card" />
          <IconProfile />
        </div>
      </div>
    </>
  );
};

export default HomePageHeader;
