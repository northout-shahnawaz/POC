import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "./register.css";
import { useDispatch } from "react-redux";

import { USER_REGISTER } from "../../components/constant/type";

function Register() {
  const dispatch = useDispatch();

  const userRegister = (res) => {
    dispatch({ type: USER_REGISTER, payload: res });
  };

  const [userInfo, setuserInfo] = useState({
    name: "",
    password: "",
    email: "",
    mobile: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(userInfo);
    userRegister(userInfo);
    setuserInfo({ name: "", email: "", mobile: "", password: "" });
  };

  return (
    <div>
      {" "}
      <section className="login_container">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Col sm="5" className="reg-container">
              <div>
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="name">Username</Label>
                    <Input
                      type="text"
                      value={userInfo.name}
                      name="name"
                      id="name"
                      placeholder="Username"
                      required
                      onChange={(event) =>
                        setuserInfo({
                          name: event.target.value,
                          password: userInfo.password,
                          email: userInfo.email,
                          mobile: userInfo.mobile,
                        })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      value={userInfo.email}
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={(event) =>
                        setuserInfo({
                          name: userInfo.name,
                          password: userInfo.password,
                          email: event.target.value,
                          mobile: userInfo.mobile,
                        })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="mobile">Mobile</Label>
                    <Input
                      type="text"
                      value={userInfo.mobile}
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile"
                      required
                      onChange={(event) =>
                        setuserInfo({
                          name: userInfo.name,
                          password: userInfo.password,
                          email: userInfo.email,
                          mobile: event.target.value,
                        })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      value={userInfo.password}
                      name="password"
                      id="examplePassword"
                      placeholder="********"
                      required
                      onChange={(event) =>
                        setuserInfo({
                          name: userInfo.name,
                          password: event.target.value,
                          email: userInfo.email,
                          mobile: userInfo.mobile,
                        })
                      }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" className="reg_btn">
                      REGISTER
                    </Button>
                    <p>
                      Having account ! <Link to="/"> Login </Link>{" "}
                    </p>
                  </FormGroup>
                </Form>
              </div>
            </Col>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
