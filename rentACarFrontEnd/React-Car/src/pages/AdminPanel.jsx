import react, { useState, useEffect } from "react";
import {
  Container,
  Alert,
  Row,
  Form,
  FormGroup,
  Input,
  Col,
  Label,
  Button,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";
import Axios from "../Axios/Axios";
import { reactLocalStorage } from "reactjs-localstorage";

function AdminPanel() {
  const [models, setModels] = useState([]);
  const [stations, setStations] = useState([]);

  const logOut = e => {
    reactLocalStorage.remove("isLoggedIn");
    reactLocalStorage.remove("adminLogin");
    window.location.reload();
  };

  const addAdmin = e => {
    let regex = new RegExp(
      /^[0-9]{2}[\\ -]{0, 1}[A-Z]{1, 2}[\\ -]{0, 1}[0-9]{4}$/
    );
    if (
      e.target.numberPlate.value === "" ||
      e.target.price.value === "" ||
      e.target.productionDate.value === ""
    ) {
      Alert("Please fill in all fields");
    } else if (!regex.test(e.target.numberPlate.value)) {
      Alert("Please enter a valid number plate");
    } else {
      e.preventDefault();
      Axios.request(
        "/adminController/addAdmin?name=" +
          e.target.Name.value +
          "&password=" +
          e.target.password.value
      )
        .then(result => {
          console.log(result);
          e.target.reset();
        })
        .catch(error => {
          console.log(error);
        });
    }
    e.target.reset();
  };

  const deleteCustomer = e => {
    e.preventDefault();
    Axios.request("/customerController/delete?id=" + e.target.id.value)
      .then(result => {
        console.log(result);
        e.target.reset();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const saveCar = e => {
    e.preventDefault();
    const data = JSON.stringify({
      numberPlate: e.target.numberPlate.value,
      price: e.target.price.value,
      vehicleClass: {
        nameOfVehicleClass: e.target.nameOfVehicleClass.value,
      },
      model: {
        modelName: e.target.modelName.value,
      },
      gearboxType: {
        gearboxTypeName: e.target.gearboxTypeName.value,
      },
      fuelType: {
        fuelTypeName: e.target.fuelTypeName.value,
      },
      station: {
        stationName: e.target.stationName.value,
      },
      color: {
        colorName: e.target.colorName.value,
      },
      productionDate: e.target.productionDate.value,
    });
    Axios.post("/carController/createCar", data, {
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    Axios.get("/modelController/models")
      .then(result => {
        setModels(result.data);
      })
      .catch(error => {
        console.log(error);
      });

    Axios.get("/stationController/stations")
      .then(result => {
        setStations(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {reactLocalStorage.get("adminLogin") ? (
        <div>
          <Container>
            <div className="m-5 border bg-light">
              <Form className="m-2" onSubmit={saveCar}>
                <Row>
                  <h3>Add New Car</h3>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="numberPlate">Number Plate</Label>
                      <Input
                        id="numberPlate"
                        name="numberPlate"
                        placeholder="34 XX 0000"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="price">Price (₺)</Label>
                      <Input
                        id="price"
                        name="price"
                        placeholder="100"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="productionDate">Production Date</Label>
                      <Input
                        id="productionDate"
                        name="productionDate"
                        placeholder="2020-01-01"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="fuelTypeName">Fuel Type</Label>
                      <Input
                        id="fuelTypeName"
                        name="fuelTypeName"
                        type="select"
                      >
                        <option>Benzin</option>
                        <option>Dizel</option>
                        <option>LPG</option>
                        <option>Elektrikli</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="nameOfVehicleClass">Vehicle Class</Label>
                      <Input
                        id="nameOfVehicleClass"
                        name="nameOfVehicleClass"
                        type="select"
                      >
                        <option>SUV</option>
                        <option>Sedan</option>
                        <option>Cabrio</option>
                        <option>Hatchback</option>
                        <option>Coupe</option>
                        <option>Cuv</option>
                        <option>Panelvan</option>
                        <option>Minivan</option>
                        <option>Station Wagon</option>
                        <option>Pick Up</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="gearboxTypeName">Gearbox Type</Label>
                      <Input
                        id="gearboxTypeName"
                        name="gearboxTypeName"
                        type="select"
                      >
                        <option>Otomatik</option>
                        <option>Yarı Otomatik</option>
                        <option>Manuel</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="modelName">Model</Label>
                      <Input id="modelName" name="modelName" type="select">
                        {models.map(model => (
                          <option key={model.modelID}>{model.modelName}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="station">Station</Label>
                      <Input id="stationName" name="stationName" type="select">
                        {stations.map(station => (
                          <option key={station.stationID}>
                            {station.stationName}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="color">Color</Label>
                      <Input id="colorName" name="colorName" type="select">
                        <option>Kirmizi</option>
                        <option>Sari</option>
                        <option>Mavi</option>
                        <option>Turuncu</option>
                        <option>Gri</option>
                        <option>Beyaz</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup className="text-center">
                  <Button color="primary" type="submit">
                    Save
                  </Button>
                </FormGroup>
              </Form>
            </div>

            <div className="m-5 border bg-light">
              <Form className="m-2" onSubmit={deleteCustomer}>
                <Row>
                  <h3>Delete Customer with id</h3>
                  <Col />
                  <Col>
                    <FormGroup>
                      <Label for="id">Id</Label>
                      <Input id="id" name="id" placeholder="id" type="number" />
                    </FormGroup>
                  </Col>
                  <Col />
                </Row>
                <FormGroup className="text-center">
                  <Button color="primary" type="submit">
                    Delete
                  </Button>
                </FormGroup>
              </Form>
            </div>

            <div className="m-5 border bg-light">
              <Form className="m-2" onSubmit={addAdmin}>
                <Row>
                  <h3>Add admin</h3>
                  <Col />
                  <Col>
                    <FormGroup>
                      <Label for="Name">Name</Label>
                      <Input
                        id="Name"
                        name="Name"
                        placeholder="Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="password">password</Label>
                      <Input
                        id="password"
                        name="password"
                        placeholder="password"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                  <Col />
                </Row>
                <FormGroup className="text-center">
                  <Button color="primary" type="submit">
                    Add
                  </Button>
                </FormGroup>
              </Form>
            </div>

            <div>
              <Nav>
                <NavItem>
                  <NavLink href="/Home">
                    <Button onClick={logOut} color="danger">
                      Log Out
                    </Button>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <div className="m-5 border bg-light">
              <h3 className="text-center">unauthorized entry</h3>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
export default AdminPanel;
