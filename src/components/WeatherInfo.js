import React from "react";
import "./WeatherInfo.css";

function WeatherInfo(props) {
  return (
    <div className="container">
      <h3>{props.location}</h3>
      <h1>{Math.round(props.data.main.temp)}ºF</h1>
      <div className="minmax">
        <p className="low">Low: {Math.round(props.data.main.temp_min)}ºF</p>
        <p>High: {Math.round(props.data.main.temp_max)}ºF</p>
      </div>
      <p>Feels like: {Math.round(props.data.main.feels_like)}ºF</p>
      <p>Conditions: {props.data.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;