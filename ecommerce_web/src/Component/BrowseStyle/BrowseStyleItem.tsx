import React from "react";

interface BrowseStyleItemProps {
  title: string;
  img: string;
  width?: string;
  index?:number // pass "w-[35%]" or "w-[65%]"
}

export const BrowseStyleItem: React.FC<BrowseStyleItemProps> = ({
  title,
  img,
  width,
}) => {
  return (
    <div className={`relative overflow-hidden h-[450px] rounded-2xl ${width}`}>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover"
      />
      {/* Overlay title */}
      <div className="absolute top-6 left-6">
        <h2 className="text-3xl font-bold text-black">{title}</h2>
      </div>
    </div>
  );
};
