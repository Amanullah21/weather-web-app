import React, { Component } from "react";
import LocationPicker from "react-location-picker";
import style from "../style/home.module.css";
import CloseIcon from "@mui/icons-material/Close";

/* Default position */
const defaultPosition = {
  lat: 25.609,
  lng: 85.1343,
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

  handleLocationChange({ position, address, places }) {
    // Set new location
    this.setState({ position, address });
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
