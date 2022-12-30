import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { Form, Button } from "react-bootstrap";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import Axios from "../Axios/Axios";

function CarListing() {
  const [carData, setCarData] = useState([]);
  const ALLCARS_URL = "/carController/cars";

  useEffect(() => {
    Axios.get(ALLCARS_URL)
      .then(data => {
        console.log(data.data);
        setCarData(data.data);
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
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary">Search</Button>
                </Form>
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
