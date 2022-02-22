import React from "react";
import { BsSearch } from "react-icons/bs";
import "../styles/components.css";

function InputSearch({ value, set, placeholder }) {
  return (
    <div className="app-comp__inputsearch">
      <BsSearch />
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => set(e.target.value)}
      />
    </div>
  );
}

export default InputSearch;
