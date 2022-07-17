import React, { useState } from 'react'
import Chart from "react-apexcharts";


const SunsetSunrise = ({current}) => {
  const [sunrise,setSunrise] = useState(0)

  // let sunset= current.senset
  // console.log(sunset,"seeee")
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [9, 10, 13]
      },
    },
    series: [
      {
        name: "series-1",
        data: [6,12,7],
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