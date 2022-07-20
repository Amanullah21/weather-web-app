import React from "react";
import ReactDOM from "react-dom/client";
import Location from "./component/Location";
import Ui from "./component/Ui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Ui />
    {/* <Location /> */}
  </React.StrictMode>
);
