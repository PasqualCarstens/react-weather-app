import React from "react";

export default function WeatherForecastDay(props) {
  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <img src={icon} alt="" width="80"></img>
      <div class="WeatherForecast-temperature">
        <span class="WeatherForecast-temperature-max">{maxTemperature()}</span>
        <span class="WeatherForecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
