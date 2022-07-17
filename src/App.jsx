import React, { useState } from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";
const App = ({hourly}) => {
  // console.log(hourly,"sdkjfhkjs")
  const [xdata,setXData] = useState([])
  const a =hourly.map((ele)=> ele.temp)
  console.log(a,'aaaa')
  const [state, setState] = useState({
    options: {
      xaxis: {
        categories: [22,24,25,25,26,28]
      },
    },
    series: [
      {
        name: "Hourly Temp",
        data: [21,22,24,25,29,28],
      },
    ],
  });
  console.log(state)
  // console.log(hourly)
  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="500"
      />
      </div>
  );
};

export default App;
