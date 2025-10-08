import React from "react";

import BlueJeans from "../../img/blueJeans.png";
import BlueShirt from "../../img/blueShirt.png";
import OrangeShirt from "../../img/orangeShirt.png";
import PurpleLongShirt from "../../img/purpleLongShirt.png";
import StarRating from "../Star/StarRating";

type Props = {};

const NewArrival = (props: Props) => {
  const arr = [
    {
      id: 1,
      shirt: BlueJeans,
      name: "T-SHIRT WITH TAPE DETAILS",
      rating: 4.5,
      currentPrice: 120,
      originalPrice: 150,
    },
    {
      id: 2,
      shirt: BlueShirt,
      name: "SKINNY FIT JEANS",
      rating: 3.5,
      currentPrice: 240,
      originalPrice: 260,
    },
    {
      id: 3,
      shirt: OrangeShirt,
      name: "CHECKERED SHIRT",
      rating: 4.5,
      currentPrice: 180,
      originalPrice: 200,
    },
    {
      id: 4,
      shirt: PurpleLongShirt,
      name: "SLEEVE STRIPED T-SHIRT",
      rating: 4.5,
      currentPrice: 130,
      originalPrice: 160,
    },
  ];

  return (
    <div>
      <h1 className="text-black uppercase text-center text-[48px] mt-10 mb-6">New Arrivals</h1>

      <div className="flex flex-wrap flex-row justify-center w-full gap-6">
        {arr.map((item) => {
          const discount = Math.round(
            ((item.originalPrice - item.currentPrice) / item.originalPrice) * 100
          );

          return (
            <div key={item.id} className="w-[38vh] p-2">
              {/* Product Image */}
              <img
                className="rounded-lg w-full h-[295px] object-cover"
                src={item.shirt}
                alt={`shirt-${item.id}`}
              />

              {/* Product Name */}
              <p className="text-[20px] font-semibold mt-2">{item.name}</p>

              {/* Star Rating */}
              <div className="mt-1">
                <StarRating rating={item.rating} />
              </div>

              {/* Price Section */}
              <div className="flex items-center gap-3 mt-2">
                {/* Current Price */}
                <span className="text-2xl font-bold text-black">
                  ${item.currentPrice}
                </span>

                {/* Original Price */}
                <span className="text-xl text-gray-400 line-through">
                  ${item.originalPrice}
                </span>

                {/* Discount Badge */}
                <span className="bg-red-100 text-red-500 font-bold px-3 py-1 rounded-full text-sm">
                  -{discount}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrival;
