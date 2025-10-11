import React from "react";
import clsx from "clsx";

type Props = {};

interface BrowseStyleItemProps {
  title: string;
  img: string;
}
export const BrowseStyleItem = ({ title, img }: BrowseStyleItemProps) => {
  return (
    <div
      className={clsx(
        "relative h-[250px] rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300",
        {
          "col-span-2": title === "Formal" || title === "Party",
          "col-span-1": title === "Casual" || title === "Gym",
        }
      )}
    >
      {" "}
      <img
        src={img}
        alt={title}
        className="w-[full] absolute top-5 left-5 h-[full] object-scale-down brightness-95 hover:brightness-100 transition-all duration-300"
      />
      <div className="absolute top-3 left-4 bg-white/80 px-3 py-1 rounded-md">
        <h2 className="text-lg font-semibold text-black">{title}</h2>
      </div>
    </div>
  );
};
