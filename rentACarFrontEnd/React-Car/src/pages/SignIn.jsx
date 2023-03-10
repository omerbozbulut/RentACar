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
import { reactLocalStorage } from "reactjs-localstorage";
import Home from "./Home";

export default function SignIn() {
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
    if (Customer.email.charAt(0) === "$") {
      LOGIN_URL = ADMİN_LOGIN_URL;
    } else {
      LOGIN_URL = CUSTOMER_LOGIN_URL;
    }

    Axios.get(LOGIN_URL + Customer.email)
      .then(result => {
        if (result.data.password === Customer.password) {
          if (result.data.name.charAt(0) === "$") {
            reactLocalStorage.set("isLoggedIn", true);
            reactLocalStorage.set("adminLogin", true);
            setCustomer();
            window.location.reload();
          } else {
            reactLocalStorage.set("adminLogin", false);
            reactLocalStorage.set("isLoggedIn", true);
            setCustomer();
            window.location.reload();
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
      {reactLocalStorage.get("isLoggedIn") ? (
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
                  <Button color="primary" type="submit">
                    Login
                  </Button>
                </FormGroup>
              </Form>
            </Container>
          </Col>
        </Row>
      )}
    </>
  );
}
