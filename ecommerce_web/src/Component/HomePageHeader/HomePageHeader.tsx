import React from "react";
import "../HomePageHeader/HomePageHeader.css";
import IconX from "../icon/IconX";
import SearchBar from "../SearchBar/SearchBar";
import IconCard from "../icon/IconCard";
import IconProfile from "../icon/IconProfile";
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
      <div className=" w-full text-white ">
        <div className="header-ad bg-black flex justify-center items-center h-[38px] sm:h-[64px] md:h-[50px] lg:h-[38px]  px-4">
          <p>Sign up and get 20% off to your first order! </p>
          <span className="underline ml-1 cursor-pointer"> Sign Up Now</span>
          <IconX className="ml-auto cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <h1>SHOP.CO</h1>

        <ul className="flex items-center justify-between">
          {arr.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
        <SearchBar
          bgColor="rgba(240, 240, 240, 1)"
          width="577px"
          height="48px"
          placeholder="Search For Products"
          color="rgba(0, 0, 0, 0.4)"
        />
        <div className="flex items-center justify-space-between" >
          {" "}
          <IconCard className="icon-card" />
          <IconProfile />
        </div>

        {/* color?: string;
  width?: string;
  height?: string;
  placeholder: string;
  bgColor?: string;
  text: string; */}
      </div>
    </>
  );
};

export default HomePageHeader;
