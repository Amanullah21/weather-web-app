import React, { useState } from 'react'
import Chart from "react-apexcharts";


const SunsetSunrise = ({current}) => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [6, 12, 7]
      },
    },
    series: [
      {
        name: "temp",
        data: [28,35,27]
      },
    ],
  });
  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="250"
      />
    </div>
  )
}

export default SunsetSunrise