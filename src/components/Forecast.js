import React from "react";
import "./Forecast.css";
import Card from "./Card";

function Forecast(props) {
  return (
    <div className="container">
      <h3>Five Day Forecast</h3>
      <div className="grid">
        <Card data={props.forecastData.list[0]}/>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Forecast;
