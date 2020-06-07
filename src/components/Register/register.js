import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./register.css";
import { useDispatch } from "react-redux";

import { USER_REGISTER } from "../../components/constant/type";

function Register() {
  const dispatch = useDispatch();

  const fnRegister = (res) => {
    dispatch({ type: USER_REGISTER, payload: res });
  };

  const [userInfo, setuserInfo] = useState({
    name: "",
    password: "",
    email: "",
    mobile: "",
  });
  const [success, setsuccess] = useState(false);
  //   const fnonChange = (evt) => {
  //     this.setState({ [evt.target.name]: evt.target.value });
  //   };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(userInfo);
    fnRegister(userInfo);
    setuserInfo({ name: "", email: "", mobile: "", password: "" });
    setsuccess(true);
  };
  if (success) {
    console.log(success);
    setsuccess(false);
    return <Redirect to={"/"} />;
  }
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

// export class Register extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//   name: "",
//   password: "",
//   email: "",
//   mobile: "",
//     };
//   }
//   fnonChange = (evt) => {
//     this.setState({ [evt.target.name]: evt.target.value });
//   };

//   fnRegister = (event) => {
//     event.preventDefault();
// this.props.fnRegister(this.state);
// this.setState({ name: "", email: "", mobile: "", password: "" });
// alert("User Regiser Successully !!");
//   };

//   render() {
// return (
//   <section className="login_container">
//     <div className="container-fluid h-100">
//       <div className="row h-100">
//         <Col sm="5" className="reg-container">
//           <div>
//             <h1>Register</h1>
//             <Form onSubmit={this.fnRegister}>
//               <FormGroup>
//                 <Label for="name">Username</Label>
//                 <Input
//                   type="text"
//                   value={this.state.name}
//                   name="name"
//                   id="name"
//                   placeholder="Username"
//                   required
//                   onChange={this.fnonChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="email">Email</Label>
//                 <Input
//                   type="text"
//                   value={this.state.email}
//                   name="email"
//                   id="email"
//                   placeholder="Email"
//                   required
//                   onChange={this.fnonChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="mobile">Mobile</Label>
//                 <Input
//                   type="text"
//                   value={this.state.mobile}
//                   name="mobile"
//                   id="mobile"
//                   placeholder="Mobile"
//                   required
//                   onChange={this.fnonChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="examplePassword">Password</Label>
//                 <Input
//                   type="password"
//                   value={this.state.password}
//                   name="password"
//                   id="examplePassword"
//                   placeholder="********"
//                   required
//                   onChange={this.fnonChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Button type="submit" className="reg_btn">
//                   REGISTER
//                 </Button>
//                 <p>
//                   Having account ! <Link to="/"> Login </Link>{" "}
//                 </p>
//               </FormGroup>
//             </Form>
//           </div>
//         </Col>
//       </div>
//     </div>
//   </section>
// );
//   }
// }

// const mapDispatchToProps = {
//   fnRegister: fnuserRegister,
// };
// export default connect(null, mapDispatchToProps)(Register);
