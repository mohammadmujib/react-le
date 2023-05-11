import React, { useState } from "react";
import Search from "../components/Search";
import { product } from "./product";

function SearchPage() {
  const [kyword, setKyword] = useState("");

  const filteredData = product.filter((element) => {
    return element.title.toLowerCase().includes(kyword.toLowerCase());
  });

  return (
    <div>
      <h1>SearchPage</h1>
      <Search
        placeholder={"Serach A list"}
        kyword={kyword}
        setKyword={setKyword}
      />

      {filteredData.map((item) => (
        <div>
          {item.title} <img src={item.images[0]} alt="" />{" "}
        </div>
      ))}
    </div>
  );
}

export default SearchPage;
