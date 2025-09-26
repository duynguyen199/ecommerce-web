import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
  placeholder: string;
  bgColor?: string;
  text: string;
};

const SearchBar = ({
  color,
  width,
  height,
  placeholder,
  bgColor,
  text,
}: Props) => {
  return (
    <div>
      <form className="max-w-md mx-auto">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className={`flex items-center  `}>
          <svg
            className="w-[24px] h-[24px] text-rgba(0, 0, 0, 0.4) "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            type="search"
            id="default-search"
            className={`w-[${width}] h-[${height}]  ps-2 text-sm  bg-${bgColor}  rounded-lg  text-${color} `}
            placeholder={placeholder}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
