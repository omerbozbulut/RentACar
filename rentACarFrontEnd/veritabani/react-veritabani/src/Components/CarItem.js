import React from "react";
import { Link } from "react-router-dom";

function CarItem(props) {
  return (
    <>
      <li className="cars__item">
        <Link className="cars__item__link" to={props.path}>
          <figure
            className="cars__item__pic-wrap"
            data-category={props.label}
          ></figure>
          <div className="cars__item__info">
            <h5 className="cars__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CarItem;
