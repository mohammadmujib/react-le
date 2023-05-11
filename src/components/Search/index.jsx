import React from "react";
import Style from "./style.module.css";
function Search({ placeholder, kyword, setKyword }) {
  return (
    <div className={Style.search}>
      <input
        type="text"
        placeholder={placeholder}
        value={kyword}
        onChange={(e) => setKyword(e.target.value)}
      />
      <svg
        className={Style.svg}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        ></path>
      </svg>
    </div>
  );
}

export default Search;
