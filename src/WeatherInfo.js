import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity: <span className="humidity"></span>
              <span className="percent">{props.data.humidity}%</span>, Wind:
              <span className="wind"></span>
              <span className="speed"> {props.data.wind}km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="clearfix">
            <div className="float-end">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-end icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
