import React from "react";

import StarRating from "../../Component/Star/StarRating";
import ButtonSubmit from "../../Component/Button/ButtonSubmit";
import { ProductCart } from "../../Component/ProductCart/ProductCart";
import { arrNewArrivals, topSellingArr } from "../../data/ProductDetailData";

type Props = {
  title: string;
};

const ProductList: React.FC<Props> = ({ title }: Props) => {
  return (
    <div>
      <h1 className="text-black uppercase text-center text-[48px] mt-10 mb-6">
        {title}
      </h1>
      <ProductCart products={title === "New Arrivals"? arrNewArrivals : topSellingArr}/>
{/* 
      <div className="flex flex-wrap flex-row justify-center w-full gap-6">
        {products.map((item) => {
          const discount = Math.round(
            ((item.originalPrice - item.currentPrice) / item.originalPrice) *
              100
          );

          return (
            <div key={item.id} className="w-[38vh] p-2">
              <img
                className="rounded-lg w-full h-[295px] object-cover"
                src={item.shirt}
                alt={`shirt-${item.id}`}
              />

              <p className="text-[20px] font-semibold mt-2">{item.name}</p>

              <div className="mt-1">
                <StarRating rating={item.rating} />
              </div>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl font-bold text-black">
                  ${item.currentPrice}
                </span>

                <span className="text-xl text-gray-400 line-through">
                  ${item.originalPrice}
                </span>

                <span
                  className={`${
                    discount === 0
                      ? "hidden"
                      : "bg-red-100 text-red-500 font-bold px-3 py-1 rounded-full text-sm"
                  } `}
                >
                  -{discount}%
                </span>
              </div>
            </div>
          );
        })}
      </div> */}

      <div className="text-center mb-[64px] mt-[36px]">
        <ButtonSubmit
          text="View All"
          textColor="black"
          bgColor="#0000001A"
          width="218px"
          height="52px"
          bRadius="62px"
        />
      </div>
      <hr className="w-[80%] mx-[auto]  text-[#0000001A]" />
    </div>
  );
};

export default ProductList;
