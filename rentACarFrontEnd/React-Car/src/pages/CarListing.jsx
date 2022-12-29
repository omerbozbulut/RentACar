import React, { UseEffect, UseState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import Axios from "../Axios/Axios";

function CarListing() {
  const [carData, setCarData] = UseState([]);
  const ALLCARS_URL = "/carController/cars";

  UseEffect(() => {
    Axios.get(ALLCARS_URL)
      .then(data => {
        console.log(data);
        setCarData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>
            {carData.map(item => (
              <CarItem item={item} key={item.carID} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default CarListing;
