import React from "react";
import {
  CalvinKlein,
  Gucci,
  Prada,
  Versace,
  Zara,
} from "../../assets/icon/BannerIcons/BannerIcon";

type Props = {};

const Banner = (props: Props) => {
  const arr = [
    { id: 1, component: <Versace />, text: "effaa" },
    { id: 2, component: <Zara />, text: "effaa" },
    { id: 3, component: <Gucci />, text: "effaa" },
    { id: 4, component: <Prada />, text: "effaa" },
    { id: 5, component: <CalvinKlein />, text: "effaa" },
  ];
  return (
    <div className="bg-black flex flex-wrap justify-evenly items-center p-8">
      {arr.map((item, index) => {
        return (
          <div className="text-red" key={index}>
            {item.component}
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Banner;
