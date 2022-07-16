import React from "react";
import style from "../style/weekly_field.module.css";
import "../style/globel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const WeeklyField = (props) => {
  console.log(props.data.weather);
  const day = "Fri";
  const degree = "30";
  const wea = "Sunny";
  return (
    <div className={style.Weekly_field}>
      <div className={style.Weekly_field_box}>
        <div className="bold">{day}</div>
        <div className="bold">
          {degree} <sup className="light">o</sup>
        </div>
        <WbSunnyIcon className="yellow" />
        <div>{wea}</div>
      </div>
      <div className={style.Weekly_field_box}>
        <div className="bold">{day}</div>
        <div className="bold">
          {degree} <sup className="light">o</sup>
        </div>
        <WbSunnyIcon className="yellow" />
        <div>{wea}</div>
      </div>
      <div className={style.Weekly_field_box}>
        <div className="bold">{day}</div>
        <div className="bold">
          {degree} <sup className="light">0</sup>
        </div>
        <WbSunnyIcon className="yellow" />
        <div>{wea}</div>
      </div>
      <div className={style.Weekly_field_box}>
        <div className="bold">{day}</div>
        <div className="bold">
          {degree} <sup className="light">0</sup>
        </div>
        <WbSunnyIcon className="yellow" />
        <div>{wea}</div>
      </div>
    </div>
  );
};

export default WeeklyField;
