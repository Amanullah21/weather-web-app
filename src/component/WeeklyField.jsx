import React, { useEffect, useState } from "react";
import style from "../style/weekly_field.module.css";
import "../style/globel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import moment from "moment";

const WeeklyField = ({ daily }) => {
  const [data, setData] = useState([]);
  // const dayCode = moment(data.datetime).day();
  const day = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun",
    8: "Mon",
    9: "Tue",
    10: "Wed",
    11: "Thu",
    12: "Fri",
    13: "Sat",
    14: "Sun",
  };
  let value = 0;
  return (
    <div className={style.Weekly_field}>
      {daily.map((ele, index) => {
        const dayCode = moment(ele.dt).day() + index;
        // console.log(ele.dt);
        return (
          <div className={style.Weekly_field_box}>
            <div className="bold">{day[dayCode]}</div>
            <div className="bold">
              {(ele.temp.day - 273.15).toFixed()} <sup className="light">o</sup>
            </div>
            <img
              src={`http://openweathermap.org/img/wn/${ele.weather[0].icon}.png`}
              alt=""
              className={style.Weekly_field_img}
            />
            <div>{ele.weather[0].main}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyField;
