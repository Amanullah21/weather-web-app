import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../style/home.module.css";
import Hourly from "./Hourly";
import WeeklyField from "./WeeklyField";
import style1 from "../style/input.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import stateCapital from "./autoCompelete"
import App from "../App";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const Home = () => {
  const api_key = "f56f24967aaf51182d1d4df628297c6d";
  const [text, setText] = useState("");
  let [apiData, setApiData] = useState({});
  let [daily, setDaily] = useState([]);
  let [current, setCurrent] = useState([]);
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  let [hourly, setHourly] = useState([]);
  let [error,setError] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setlatitude(pos.coords.latitude);
      setlongitude(pos.coords.longitude);
    });
  }, []);
  useEffect(() => {
    const finalApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${api_key}`;
    if (latitude !== "" && longitude !== "") {
      axios.get(finalApi).then((response) => {
        // setApiData(response.data)
        // console.log(response.data);
        setDaily(response.data.daily);
        setCurrent(response.data.current);
        setHourly(response.data.hourly);
      })

    }
  }, [latitude, longitude]);
  // setIcon(current.weather)
  // console.log(apiData)
  const getWeatherData = (city) => {
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      api_key;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setApiData(res.data);
        setlatitude(res.data.coord.lat);
        setlongitude(res.data.coord.lon);
        setError(false)
      })
      .catch((err) => {
        console.log("err", err);
        setError(true)
        if(error){
          alert("जगह का नाम गलत है दोबारा अच्छे से दाली")
          setError(false)
        }
      });
  };
  
  useEffect(() => {
    getWeatherData(text);
  }, []);
  // console.log(hourly)
  const pdata = [
    {
      Temp: 21,
    },
    {
      Temp: 22,
    },
    {
      Temp: 24,
    },
    {
      Temp: 29,
    },
    {
      Temp: 35,
    },
  ];

  const handleSearch = () => {
    getWeatherData(text);
  };
  
  return (
    <div className={style.home}>
      <div className={style1.input_box}>
        <PlaceIcon className={style1.location_icon} />
        <Stack  sx={{ width: 300}}>
          <Autocomplete
            freeSolo
            disableClearable
            options={stateCapital.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
              variant="standard"
              // size="normal"
               className="Bold"
              onSelect={(e) => setText(e.target.value)}
                {...params}
                label="Search Place"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
        </Stack>
        <button onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
      <WeeklyField daily={daily}  error={error} />
      <Hourly error={error}
        apiData={apiData}
        current={current}
        hourly={hourly}
        pdata={pdata}
      />
      {/* <App hourly={hourly}/> */}
    </div>
  );
};

export default Home;
