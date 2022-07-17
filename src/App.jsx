import React, { useState } from "react";
import Chart from "react-apexcharts";
const App = () => {
  const [state, setState] = useState({
    options: {
      xaxis: {
        categories: [9, 10, 10,11,12, 13, 14],
      },
    },
    series: [
      {
        name: "series-1",
        data: [21,22,24,25,29,28],
      },
    ],
  });
  return (
    <div>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="500"
      />

      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="500"
      />
    </div>
  );
};

export default App;
