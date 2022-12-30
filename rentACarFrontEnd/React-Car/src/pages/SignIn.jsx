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

function SignIn() {
  const [Customer, setCustomer] = useState({ email: String, password: String });

  const HandleChange = e => {
    setCustomer({ ...Customer, [e.target.name]: e.target.value });
    console.log(Customer);
  };

  const LOGIN_URL = "/customerController/authentication?email=";
  const [success, setSuccess] = useState(false);

  const HandleSubmit = async e => {
    e.preventDefault();
    Axios.get(LOGIN_URL + Customer.email, {
      email: Customer.email,
      password: Customer.password,
    })
      .then(result => {
        if (result.status === 200) {
          if (result.data.password === Customer.password) {
            setSuccess(true);
          } else {
            alert("Wrong password");
          }
        } else if (result.status === 404) {
          alert("NOT FOUND");
        } else if (result.status === 500) {
          alert("SERVER ERROR");
        }
      })
      .catch(error => {
        alert("SERVİCE ERROR");
        console.log(error);
      });
  };

  return (
    <>
      {success ? (
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
                    type="email"
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

export default SignIn;
