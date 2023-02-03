import React from "react";
import "./Form.css";

function Form(props) {
  const handleChange = e => {
    // handle key presses
    const value = e.target.value;
    props.setLocation(value);
  };

  const handleSubmit = e => {
    // handle form submit
    e.preventDefault();
    props.getWeather(props.location);
    props.getForecast(props.location);
    console.log(`The city you entered was ${props.location}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={props.location}
        onChange={handleChange}
        placeholder="Search for a city"
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
export default Form;