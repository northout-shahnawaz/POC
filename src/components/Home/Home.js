import React, { useEffect } from "react";
import "./Home.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { fngetLogin } from "../store/action/index";

function Home(props) {
  console.log("props", props);

  return (
    <div>
      <Header />
      <div className="welcomeText">Welcome {props.data.userInfo.name}</div>

      <Footer />
    </div>
  );
}

export default Home;
