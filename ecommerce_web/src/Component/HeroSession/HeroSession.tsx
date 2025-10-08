import React from "react";
import "./heroSession.css";
import ButtonSubmit from "../Button/ButtonSubmit";
import IconStart from "../../assets/icon/IconStart";
import Banner from "../Banner/Banner";
type Props = {};

const arr = [
  { id: 1, quantitive: "200+", desctiption: "International Brands" },
  { id: 2, quantitive: "2000+", desctiption: "High-Quality Products" },
  { id: 3, quantitive: "30000+", desctiption: "Happy Customers" },
];
const HeroSession = (props: Props) => {
  return (
    <>
      {" "}
      <div className="bg-[#F2F0F1] h-[60vh] sm:h-[100vh] lg:h-[65vh] xl:h-[80vh] flex flex-col lg:flex-row justify-center items-center ">
        <div className="md:ml-[100px] md:mt-[103px]">
          <h1 className="hero-title font-bold text-[36px] md:text-[64px]  md:w-[577px] mb-[32px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="hero-subtitle  text-[14px] md:text-[16px] my-[32px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="mt-[32px] mb-[48px]">
            {" "}
            <ButtonSubmit
              width="210px"
              height="52px"
              bgColor="#000000"
              textColor="#ffffff"
              bRadius="62px"
              text="Shop Now"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-center hero-ads items-center">
            {arr.map((item, index) => {
              return (
                <div className="stat-item" key={index}>
                  <h2 className="quantity-ads text-black text-[40px]">
                    {item.quantitive}
                  </h2>
                  <p className="description-ads">{item.desctiption}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[390px] h-[100vh] md:w-full sm:h-[40vh] lg:h-[80vh]  relative hero-session-left">
          <div className="absolute top-[10%] right-[10%] md:right-[0%] lg:top-[20%]">
            {" "}
            <IconStart
              width="20vmin"
              height="20vmin"
              className=" w-[15vmin] h-[15vmin] md:h-[7vmin] md:w-[7vmin]"
            />
          </div>
          <div className="absolute right-[80%] bottom-[48%] md:bottom-[60%]">
            {" "}
            <IconStart
              width="5vmin"
              height="5vmin"
              className="md:h-[4vmin] md:w-[4vmin] "
            />
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
};

export default HeroSession;
