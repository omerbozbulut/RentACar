import React, { useState } from "react";
import {
  Form,
  Label,
  FormGroup,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import Axios from "../Axios/Axios";
import Home from "./Home";

export default function SignIn({ isLoggedIn, setIsLoggedIn, setUserType }) {
  const [Customer, setCustomer] = useState();

  const HandleChange = e => {
    setCustomer({ ...Customer, [e.target.name]: e.target.value });
    console.log(Customer);
  };

  const CUSTOMER_LOGIN_URL = "/customerController/authentication?email=";
  const ADMİN_LOGIN_URL = "/adminController/authentication?name=";

  const HandleSubmit = async e => {
    e.preventDefault();
    let LOGIN_URL;
    if (Customer.email === "admin") {
      LOGIN_URL = ADMİN_LOGIN_URL;
    } else {
      LOGIN_URL = CUSTOMER_LOGIN_URL;
    }

    Axios.get(LOGIN_URL + Customer.email)
      .then(result => {
        if (result.data.password === Customer.password) {
          if (result.data.name === "admin") {
            setIsLoggedIn(true);
            setUserType("admin");
          } else {
            setUserType("customer");
            setIsLoggedIn(true);
          }
        } else {
          alert("Wrong password");
        }
      })
      .catch(error => {
        alert("SERVİCE ERROR");
        console.log(error);
      });
  };

  return (
    <>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Row>
          <Col
            md={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            <Container className="bg-light border" fluid="sm">
              <h3 className="text-center mt-3">Rent a car</h3>
              <Form onSubmit={HandleSubmit}>
                <FormGroup className="m-5">
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Email"
                    type="text"
                    onChange={HandleChange}
                  />
                </FormGroup>
                <FormGroup className="m-5">
                  <Label for="examplePassword">Password</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password"
                    type="password"
                    onChange={HandleChange}
                  />
                </FormGroup>
                <FormGroup className="text-center">
                  <Button color="primary">Login</Button>
                </FormGroup>
              </Form>
            </Container>
          </Col>
        </Row>
      )}
    </>
  );
}
