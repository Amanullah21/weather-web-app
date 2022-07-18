import React from "react";
import TextField from "@mui/material/TextField";

const App = () => {
  return (
    <div>
      <TextField label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  );
};

export default App;
