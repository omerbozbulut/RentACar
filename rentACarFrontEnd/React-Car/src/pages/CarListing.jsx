import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import Axios from "../Axios/Axios";

function CarListing() {
  const [carData, setCarData] = useState([]);
  const [searchCarName, setSearchCarName] = useState("");
  const ALL_CARS_URL = "/carController/cars";
  const LOW_TO_HIGH_URL = "/carController/lowtohighcars";
  const HIGH_TO_LOW_URL = "/carController/hightolowcars";
  const SEARCH_CAR_URL = "carController/searchcar?name=";
  const [sortDropdownOpen, setSortDropDownOpen] = useState(false);
  const [classDropdownOpen, setClassDropDownOpen] = useState(false);

  const toggleSort = () => setSortDropDownOpen(prevState => !prevState);
  const toggleClass = () => setClassDropDownOpen(prevState => !prevState);

  useEffect(() => {
    Axios.get(ALL_CARS_URL)
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
            <Col lg="16">
              <div className="d-flex align-items-center m-3">
                <Col className="d-flex">
                  <span className=" d-flex align-items-center">
                    <i class="ri-sort-asc"></i> Sort By
                  </span>
                  <Dropdown
                    isOpen={sortDropdownOpen}
                    toggle={toggleSort}
                    direction="down"
                    className="m-2"
                  >
                    <DropdownToggle caret color="primary">
                      Select
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Sort</DropdownItem>
                      <DropdownItem
                        onClick={function sortCars() {
                          Axios.get(LOW_TO_HIGH_URL)
                            .then(data => {
                              console.log(data.data);
                              setCarData(data.data);
                            })
                            .catch(error => {
                              console.log(error);
                            });
                        }}
                      >
                        Low to High
                      </DropdownItem>
                      <DropdownItem
                        onClick={function sortCars() {
                          Axios.get(HIGH_TO_LOW_URL)
                            .then(data => {
                              console.log(data.data);
                              setCarData(data.data);
                            })
                            .catch(error => {
                              console.log(error);
                            });
                        }}
                      >
                        High to Low
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                <Col className="d-flex">
                  <span className=" d-flex align-items-center">
                    <i class="ri-car-fill"></i> Select By Class
                  </span>
                  <Dropdown
                    isOpen={classDropdownOpen}
                    toggle={toggleClass}
                    direction="down"
                    className="m-2"
                  >
                    <DropdownToggle caret color="primary">
                      Select
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Vehicle Classes</DropdownItem>
                      <DropdownItem>Sedan</DropdownItem>
                      <DropdownItem>SUV</DropdownItem>
                      <DropdownItem>Hatchback</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                <Col></Col>
                <Col>
                  <Form className="d-flex">
                    <FormGroup row>
                      <Col sm={10}>
                        <Input
                          placeholder="Search Model"
                          type="text"
                          onChange={e => setSearchCarName(e.target.value)}
                          value={searchCarName}
                        />
                      </Col>
                      <Col sm={2}>
                        <Button
                          type="button"
                          onClick={function searchCar() {
                            Axios.get(SEARCH_CAR_URL + searchCarName)
                              .then(data => {
                                console.log(data.data);
                                setCarData(data.data);
                                setSearchCarName("");
                              })
                              .catch(error => {
                                console.log(error);
                              });
                          }}
                          color="primary"
                        >
                          Search
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </Col>
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
