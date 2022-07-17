import React from "react";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";

const App = () => {
  let [state,setState] = useState('')
  return (
    <div>
      <DebounceInput
        debounceTimeout={300}
        onChange={(event) =>setState({ value: event.target.value })}
      />


      <p>Value: {state.value}</p>
    </div>
  );
};

export default App;
