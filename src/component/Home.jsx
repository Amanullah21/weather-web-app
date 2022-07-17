import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../style/home.module.css";
import Hourly from "./Hourly";
import WeeklyField from "./WeeklyField";
import style1 from "../style/input.module.css";
// import
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";
import App from "../App";

const Home = () => {
  const api_key = "f56f24967aaf51182d1d4df628297c6d";
  // const api_endpoint = "https://api.openweathermap.org/data/2.5/onecall";
  const [text, setText] = useState("");
  let [apiData, setApiData] = useState({});
  let [daily, setDaily] = useState([]);
  let [current, setCurrent] = useState([]);
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  let [hourly, setHourly] = useState([]);

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
        console.log(response.data);
        setDaily(response.data.daily);
        setCurrent(response.data.current);
        setHourly(response.data.hourly);
      });
    }
  }, [latitude, longitude]);
  // setIcon(current.weather)
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
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getWeatherData(text);
  }, []);
  // console.log(hourly)
  const pdata = [
    {
      temp: 21,
    },
    {
      temp: 22,
    },
    {
      temp: 24,
    },
    {
      temp: 29,
    },
    {
      temp: 35,
    },
  ];

  const handleSearch = () => {
    getWeatherData(text);
  };

  return (
    <div className={style.home}>
      <div className={style1.input_box}>
        <PlaceIcon className={style1.location_icon} />
        <input
          type="text"
          name=""
          className="bold"
          id="input_field"
          defaultValue={text}
          placeholder="Enter Your Location"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
      <WeeklyField daily={daily} />
      <Hourly
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
