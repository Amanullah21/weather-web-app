import React from "react";
import style from "../style/hourly.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

// import LineGraph from "react-line-graph";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  CartesianGrid,
} from "recharts";
import SunsetSunrise from "./SunsetSunrise";

const Hourly = ({  current, pdata }) => {
  
  //   const icon = current.weather[0].icon
  //   console.log(icon,'if')
  return (
    <div className={style.hourly_container}>
      <div className={style.current_temp}>
        <div>
          <h1>
            {(current.temp - 273.15).toFixed(2)} <sup className=".deg">o</sup> C
          </h1>
        </div>
        <div className={style.hourly_sun}>
          <WbSunnyIcon fontSize="large" className="yellow" />
          {/* <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}.png`} alt="icon" /> */}
        </div>
      </div>
      <div className={style.hourly_graph}>
        <ResponsiveContainer width="100%" aspect={0}>
          <LineChart data={pdata} margin={{ left: 20, right: 20 }}>
            <CartesianGrid />
            <XAxis dataKey="temp" interval={"preserveStartEnd"} />
            <Legend />
            <Tooltip />

            <Line
              dataKey="temp"
              className="bold"
              stroke="#47adea"
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
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
        <SunsetSunrise current={current} />
      </div>
    </div>
  );
};

export default Hourly;
