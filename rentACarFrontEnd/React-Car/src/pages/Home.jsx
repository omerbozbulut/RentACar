import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import Axios from "../Axios/Axios";
import CarItem from "../components/UI/CarItem";

function Home() {
  const [cars, setCars] = useState([]);
  const ALLCARS_URL = "/carController/cars";

  useEffect(() => {
    Axios.get(ALLCARS_URL)
      .then(data => {
        console.log(data.data);
        setCars(data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Helmet title="Home">
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Offers</h2>
            </Col>

            {cars.map(item => (
              <CarItem item={item} key={item.carID} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Home;
