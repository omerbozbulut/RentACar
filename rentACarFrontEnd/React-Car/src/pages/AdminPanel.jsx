import react from "react";
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
} from "reactstrap";
import Axios from "../Axios/Axios";

function AdminPanel() {
  const handleSubmit = e => {
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
      console.log(data);
      Axios.post("/carController/createCar", data, {
        headers: {
          "Content-Type": "application/json",
        },
      }).catch(error => {
        console.log(error);
      });
    }
  };

  return (
    <>
      <div>
        <Container>
          <div className="m-5 border bg-light">
            <Form className="m-2" onSubmit={handleSubmit}>
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
                    <Input id="fuelTypeName" name="fuelTypeName" type="select">
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
                      <option>520</option>
                      <option>Maybach</option>
                      <option>A180</option>
                      <option>Fluence</option>
                      <option>Amarok</option>
                      <option>Superb</option>
                      <option>Leon</option>
                      <option>308</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="station">Station</Label>
                    <Input id="stationName" name="stationName" type="select">
                      <option>Beylikdüzü Bayisi</option>
                      <option>Kadiköy Bayisi</option>
                      <option>Buca Bayisi</option>
                      <option>Alsancak Bayisi</option>
                      <option>Kizilay Bayisi</option>
                      <option>Iznik Bayisi</option>
                      <option>Cumayeri Bayisi</option>
                      <option>Inegöl Bayisi</option>
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
                  Sign in
                </Button>
              </FormGroup>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AdminPanel;
