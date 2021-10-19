import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autocomplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-dark w-100"
            />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h1>Sydney</h1>
          <ul>
            <li>Tuesday 14:00</li>
            <li>Mostly Sunny</li>
            <li>
              Humidity: <span className="humidity"></span>
              <span className="percent">70%</span>, Wind:
              <span className="wind"></span>
              <span className="speed"> 3km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix">
            <div className="float-end">
              <span className="temperature">12</span>
              <span className="unit">°C</span>
            </div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
              alt="Sunny"
              className="float-end icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
