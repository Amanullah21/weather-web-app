import React from "react";
import { useState } from "react";
import style from "../style/input.module.css";
// import
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";

const Input = ({apiData,haldleSearch}) => {
  const [text, setText] = useState(apiData?.name);
  // const searchHandler = () => {
  //   console.log(text);
  // };
  return (
    <div className={style.input_box}>
      <PlaceIcon className={style.location_icon}/>
      <input
        type="text"
        name=""
        className="bold"
        id="input_field"
        defaultValue={text}
        placeholder="Enter Your Location"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() =>haldleSearch(text)}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Input;
