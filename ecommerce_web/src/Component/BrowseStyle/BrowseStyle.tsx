import React from "react";
import causalImg from "../../assets/img/causal.png";
import partyImg from "../../assets/img/party.png";
import formalImg from "../../assets/img/formal.png";
import gymImg from "../../assets/img/gym.png";

type Props = {};

const arr = [
  { id: 1, title: "Casual", img: causalImg },
  { id: 2, title: "Formal", img: formalImg },
  { id: 3, title: "Gym", img: gymImg },
  { id: 4, title: "Party", img: partyImg },
];

const BrowseStyle: React.FC<Props> = () => {
  // Split into rows of two items
  const rows = [
    arr.slice(0, 2), // first two
    arr.slice(2, 4), // next two
  ];

  return (
    <div className="flex justify-center w-full mt-10">
      <div className="bg-[#F0F0F0] w-[95%] md:w-[90%] rounded-[40px] py-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
          BROWSE BY DRESS STYLE
        </h1>

        <div className="flex flex-col gap-8">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } gap-6 md:gap-8 px-6 md:px-10`}
            >
              {row.map((item, j) => (
                <div
                  key={item.id}
                  className={`relative overflow-hidden rounded-2xl h-[250px] md:h-[450px] ${
                    j === 0 ? "md:w-[35%]" : "md:w-[65%]"
                  } w-full`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-black">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
