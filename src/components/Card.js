import React from "react";
import "./Card.css";

function Card(props) {

  return (
    <div className="card bg-light mb-3">
      <div className="card-header">Tomorrow</div>
      <div className="card-body">
        <h5 className="card-title">Conditions</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Card;
