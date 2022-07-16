import React from "react";
import style from "../style/hourly.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const Hourly = (props) => {
  

  console.log(props);
  console.log(props.hourly);

  return (
    <div className={style.hourly_container}>
      <div className={style.current_temp}>
        <div>
          <h1 s>
            {props.hourly.current_temp} <sup className=".deg">o</sup> C
          </h1>
        </div>
        <div className={style.hourly_sun}>
          <WbSunnyIcon fontSize="large" className="yellow" />
        </div>
      </div>
      <div className={style.hourly_graph}>
        <ResponsiveContainer width="100%" aspect={0}>
          <LineChart data={props.pdata} margin={{ left: 20, right: 20 }}>
            <CartesianGrid />
            <XAxis dataKey="temp" interval={"preserveStartEnd"} />
            {/* <YAxis></YAxis> */}
            <Legend />
            <Tooltip />

            <Line
              dataKey="temp"
              className="bold"
              stroke="#47adea"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={style.pre_container}>
        <div>
          <div className="bold">Pressure</div>
          <div>{props.hourly.pressure} hpa</div>
        </div>
        <div><div className="bold">Humadity</div>
          <div>{props.hourly.humadity} %</div></div>
      </div>
      <div className={style.hourly_graph_sunset}></div>
    </div>
  );
};

export default Hourly;
