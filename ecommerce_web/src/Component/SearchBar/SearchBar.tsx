import React from "react";
import IconSearch from "../../assets/icon/IconSearch";

type Props = {
  color?: string;
  width?: string;
  height?: string;
  placeholder: string;
  bgColor?: string;
};

const SearchBar = ({ color, width, height, placeholder, bgColor }: Props) => {
  return (
    <div>
      <form className="max-w-md mx-auto">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className={`flex items-center relative  `}>
          <div className="absolute left-[16px]  ">
            {" "}
            <IconSearch />
          </div>
          <input
            type="search"
            id="default-search"
            style={{
              background: bgColor,
              width,
              height,
              color,
              borderRadius: 62,
            }}
            className={` text-sm rounded-lg px-12  `}
            placeholder={placeholder}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
