import React from "react";
import "./Cars.css";
import CarItem from "./CarItem";

function Cars() {
  return (
    <div className="cars">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cars__container">
        <div className="cars__wrapper">
          <ul className="cars__items">
            <CarItem
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/cars"
            />
            <CarItem
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-in"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cars;
