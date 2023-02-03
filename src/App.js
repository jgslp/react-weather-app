import React, {useState} from "react";
import './App.css';
import WeatherInfo from "./components/WeatherInfo";
import Form from "./components/Form";
// import Forecast from "./components.Forecast";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [location, setLocation] = useState("");
  // const [forecast, setForecast] = useState(null);

  const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  const API_KEY = "c2cb19f1b170a46b5b1bb3461ba43f3e";

  const getWeather = () => {
    // call Open Weather API
    let type = "weather";
    setLoading(true);
    fetch(`${BASE_URL}${type}?q=${location}&appid=${API_KEY}&units=imperial`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        setError(error.message);
        console.log("Error:" + error.message);
      });
    setLoading(false);
  };

  // const getForecast = () => {
  //   // call Open Weather API
  //   let type = "forecast";
  //   setLoading(true);
  //   fetch(`${BASE_URL}${type}?q=${location}&appid=${API_KEY}&units=imperial`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`${response.status}: ${response.statusText}`);
  //       }
  //       return response.json();
  //     })
  //     .then(forecastData => {
  //       setForecast(forecastData);
  //     })
  //     .catch(error => {
  //       setError(error.message);
  //       console.log("Error:" + error.message);
  //     });
  //   setLoading(false);
  // };

  return (
    <div className="weather">
      <Form
        getWeather={getWeather}
        // getForecast={getForecast}
        location={location}
        setLocation={setLocation}
      />
      {error && <h3 className="error">Error: {error}</h3>}
      {loading && <div className="loader">Loading...</div>}
      {weather && <WeatherInfo data={weather} location={location} />}
      {/* {forecast && <Forecast forecastData={forecast} location={location} />} */}
    </div>
  );
}