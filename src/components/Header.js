import React from "react";
import "../styles/Header.scss";
import logo from "../Images/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
export default function Header() {
  return (
    <div className="container_header">
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div className="menu">
        <a href="#modelS">Model S</a>
        <a href="#modelY">Model Y</a>
        <a href="#model3">Model 3</a>
        <a href="#modelX">Model X</a>
        <a href="#solar-pannel">Solar Pannel</a>
        <a href="#solar-roof">Solar Roof</a>
      </div>
      <div className="right_menu">
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <div className="icons">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}
