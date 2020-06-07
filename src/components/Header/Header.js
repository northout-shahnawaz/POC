import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Header.css";
import { useDispatch } from "react-redux";

import { LOGOUT } from "../../components/constant/type";
export default function Header() {
  // const [count, setcount] = useState(0);
  // const handleClick = () => {
  //   setcount(1);
  // };

  // if (count) {
  //   console.log("click");
  //   return <Redirect to={"/"} />;
  // }
  const dispatch = useDispatch();

  const fnLogout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div>
      <div className="callout primary" id="Header">
        <div className="row column">
          <button className="logouButton" onClick={fnLogout}>
            logout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
