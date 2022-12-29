import React from "react";
import { Col } from "reactstrap";
import "../../styles/car-item.css";

const CarItem = props => {
  const { brand, gearboxType, station, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">
            marka model{brand}
            {brand.modelList.modelName}
          </h4>
          <h6 className="rent__price text-center mt-">
            {price}.00₺ <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> model 1990{}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> otomatik
              {gearboxType.nameOfGearboxType}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> station.city{station.stationName}
            </span>
          </div>
          <button className=" w-50 car__item-btn car__btn-rent">Rent</button>
          <button className=" w-50 car__item-btn car__btn-details">
            Details
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
