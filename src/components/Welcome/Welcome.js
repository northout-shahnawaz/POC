import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./Welcome.css";
import { useDispatch } from "react-redux";

function Welcome(props) {
  console.log("welcome screen", props, props.data.userList);

  const dispatch = useDispatch();

  const [userInfo, setuserInfo] = useState({
    name: "",
    password: "",
  });

  const fnLogin = (res) => {
    dispatch({ type: "AUTH_LOGIN", payload: res });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = props.data.userList;
    let loginUser =
      userData.length > 0
        ? userData.find(
            (user) =>
              user.name === userInfo.name && user.password === userInfo.password
          )
        : undefined;
    if (loginUser === undefined) {
      alert("Invalied userid and passoword");
    } else {
      fnLogin(loginUser);
    }
  };

  const responseFacebook = (response) => {
    console.log("facebook console");
    console.log(response);

    const resp = { name: response.name, imageUrl: response.picture.data.url };

    fnLogin(resp);
  };

  const responseGoogle = (response) => {
    console.log("google console");
    console.log(response);
    fnLogin(response.profileObj);
  };

  return (
    <section className="login_container">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Col sm="4" className="login-container">
            <div>
              <h1>Login</h1>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input
                    type="text"
                    value={userInfo.name}
                    name="name"
                    id="username"
                    placeholder="Username"
                    required
                    onChange={(event) =>
                      setuserInfo({
                        name: event.target.value,
                        password: userInfo.password,
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
                      })
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Button className="login_btn" type="submit">
                    SIGN IN
                  </Button>
                  <p>
                    Don't have account ! <Link to="/register">Register </Link>{" "}
                  </p>
                </FormGroup>
              </Form>
              <FacebookLogin
                appId="1015016365581153"
                autoLoad={true}
                fields="name,email,picture"
                onClick={""}
                callback={responseFacebook}
              />
              <br />
              <h6>Or</h6>
              <br />
              <GoogleLogin
                className="loginBtn"
                clientId="681084349248-r4e15s99nabjgtpp3bjffd8ba3l5itu8.apps.googleusercontent.com"
                buttonText="login with google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </Col>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
// if (sessionStorage.getItem("userData")) {
//   const data = JSON.parse(sessionStorage.getItem("userData"));
//   console.log("dta", data);

//   fnLogin(data.userInfo);
//   return <Redirect to={"/home"} />;
// }
// const sessionData = {
//   isLoggedin: true,
//   userInfo: resp,
//   uid: "admin",
//   password: "admin",
// };
// sessionStorage.setItem("userData", JSON.stringify(sessionData));
