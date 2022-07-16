import React from "react";
import { useState } from "react";
import style from "../style/input.module.css";
// import
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";

const Input = () => {
  const [text, setText] = useState("Patna, Bihar");
  const searchHandler = () => {
    console.log(text);
  };
  return (
    <div className={style.input_box}>
      <PlaceIcon className={style.location_icon}/>
      <input
        type="text"
        name=""
        className="bold"
        id="input_field"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={searchHandler}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Input;
