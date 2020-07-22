import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import logo from "./logo2.png";
import { Slider } from "./Slider";
const Header = () => {
  const { keyframes, timing } = heartBeat;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      // delay: 1000, // Delay 1s
      iterations: 200,
      // duration: timing.duration * 0.75, // Speed up the animation
    },
  });
  return (
    <>
      <nav className="container">
        <img
          className="imge"
          src={logo}
          style={{ width: "280px", height: "90px" }}
          alt="logo"
        />

        <div className="nav-link" ref={ref}>
          <Link to="#">Home</Link>
          <Link to="#">About us</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Service</Link>
          <Link to="#" className="btn">
            Get Started
          </Link>
        </div>
      </nav>
      <Slider />
    </>
  );
};
export default Header;
