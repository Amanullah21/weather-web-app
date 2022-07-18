import React from "react";
import style from "../style/hourly.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Chart from "react-apexcharts";

const Hourly = ({ current, cTemp }) => {
  let sunSet = current.sunset;
  let sunRise = current.sunrise
  
  let curentSunrise = new Date(sunRise*1000).toLocaleTimeString()
  let curentsunSet = new Date(sunSet*1000).toLocaleTimeString()

  const currentTime = new Date();
  const time = (currentTime).toLocaleTimeString("en-US");


  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["9AM ", "10AM", "11AM", "12PM", "1PM", "3PM"],
      },
    },

    series: [
      {
        name: "Temperature",
        data: [cTemp - 5, cTemp - 3, cTemp - 1, cTemp, +cTemp + 1, cTemp - 3],
      },
    ],
    options1: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["6AM", time, "7Pm"],
      },
    },
    series1: [
      {
        name: "Sunset & Sunrise Time",
        data: [curentSunrise, time, curentsunSet],
      },
    ],
  };
  return (
    <div className={style.hourly_container}>
      <div className={style.current_temp}>
        <div>
          <h1>
            {(current.temp - 273.15).toFixed(2)} <sup className=".deg">o</sup> C
          </h1>
        </div>
        <div className={style.hourly_sun}>
          <WbSunnyIcon fontSize="large" className="orange" />
        </div>
      </div>
      <div className={style.hourly_graph}>
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="280"
          height="160"
        />
      </div>
      <div className={style.pre_container}>
        <div>
          <div className="bold">Pressure</div>
          <div>{current?.pressure} hpa</div>
        </div>
        <div>
          <div className="bold">Humadity</div>
          <div>{current?.humidity} %</div>
        </div>
      </div>
      <div className={style.hourly_graph_sunset}>
        <div>
          <div>
            <div className="bold">Sunrise</div>
            <div>{new Date(current?.sunrise * 1000).toLocaleTimeString()}</div>
          </div>
          <div>
            <div className="bold">Sunset</div>
            <div>{new Date(current?.sunset * 1000).toLocaleTimeString()}</div>
          </div>
        </div>
        <div>
          <Chart
            options={state.options1}
            series={state.series1}
            type="area"
            width="280"
            height="160"
          />
        </div>
      </div>
    </div>
  );
};

export default Hourly;
