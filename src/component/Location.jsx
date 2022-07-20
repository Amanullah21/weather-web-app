import React, { Component } from "react";
import LocationPicker from "react-location-picker";
import style from "../style/home.module.css";
import CloseIcon from "@mui/icons-material/Close";

/* Default position */
const defaultPosition = {
    lat: 23.323,
    lng:32.434,
  };

class Location extends Component {
  constructor(props) {
    super(props);
    
   
    this.state = {
      position: {
        lat: 0,
        lng: 0,
      },
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange({ position}) {
    // Set new location
    this.setState({ position });
  }

  render() {
    return (
      <div className={style.location}>
        <LocationPicker
          containerElement={<div style={{ height: "450px" }} />}
          mapElement={<div style={{ height: "450px" }} />}
          defaultPosition={defaultPosition}
          onChange={this.handleLocationChange}
        />
        <button><CloseIcon/></button>
      </div>
    );
  }
}
export default Location;
