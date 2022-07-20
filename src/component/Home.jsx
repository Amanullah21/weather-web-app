import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../style/home.module.css";
import Hourly from "./Hourly";
import WeeklyField from "./WeeklyField";
import style1 from "../style/input.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import stateCapital from "./autoCompelete";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DebounceInput } from "react-debounce-input";
import Location from "./Location";

const Home = () => {
  const api_key = "f56f24967aaf51182d1d4df628297c6d";
  const [text, setText] = useState("");
  let [apiData, setApiData] = useState({});
  let [daily, setDaily] = useState([]);
  let [current, setCurrent] = useState([]);
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  let [hourly, setHourly] = useState([]);
  let [error, setError] = useState(false);
  let [cTemp, setCTemp] = useState(0);
  let [locationBtn, setLocationBtn] = useState(true);

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
        setDaily(response.data.daily);
        setCurrent(response.data.current);
        setHourly(response.data.hourly);
        setCTemp((response.data.current.temp - 273.17).toFixed());
      });
    }
  }, [latitude, longitude]);

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
        setError(false);
      })
      .catch((err) => {
        setError(true);
        if (error) {
          alert("जगह का नाम गलत है दोबारा अच्छे से दाली");
          setError(false);
        }
      });
  };
  useEffect(() => {
    getWeatherData(text);
  }, [text]);
  const handleSearch = () => {
    getWeatherData(text);
  };
  const LoationHandler = () => {
    setLocationBtn(true);
    console.log(locationBtn);
  };

  return (
    <div className={style.home}>
      <div className={style1.input_box}>
        <PlaceIcon className={style1.location_icon} onClick={LoationHandler} />
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          options={stateCapital.map((option) => option.title)}
          onChange={(ele) => setText(ele.target.value)}
        />
        <button onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
      <WeeklyField daily={daily} error={error} />
      {
        locationBtn ? <Location/>:<Hourly
        error={error}
        apiData={apiData}
        current={current}
        hourly={hourly}
        cTemp={cTemp}
      />
      }
      
    </div>
  );
};

export default Home;
