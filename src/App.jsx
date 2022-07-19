import React from "react";
import ReactDOM from "react-dom";
import { DebounceInput } from "react-debounce-input";
import { useState } from "react";
import stateCapital from "../src/component/autoCompelete";

const App = () => {
  const [state, setState] = useState("");
  return (
    <div>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        options={stateCapital.map((option) => option.title)}
        onChange={(ele) => setState(ele.target.value)}
      />

      <p>Value: {state}</p>
    </div>
  );
};

export default App;
