import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "bd7a034b868c09bf6a301a41181ce82e";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            width="80"
          ></img>
          <div class="WeatherForecast-temperature">
            <span class="WeatherForecast-temperature-max">19° </span>
            <span class="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
