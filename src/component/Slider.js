import React from "react";
import logo from "./slidersto.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";
export const Slider = () => {
  const { keyframes, timing } = pulse;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      iterations: Infinity,
      //   duration: timing.duration * 0.75, // Speed up the animation
    },
  });
  return (
    <>
      <div className="slider">
        <div className="slide">
          <div className="left">
            <h3>HI,WE'RE JUNTO</h3>
            <h1>
              We're here to help you{" "}
              <Typical
                loop={Infinity}
                easing="ease-in"
                wrapper="b"
                steps={[
                  "outrank the competition",
                  "create bad  content",
                  "generate more",
                  "look sexy online",
                  "close more deals",
                  "grow your business",
                  "optimize conversions",
                ]}
              />
            </h1>

            <span>
              <button className="btnn">Let's make it happen</button>

              <Link to="#" className="btn-link">
                How we work
              </Link>
            </span>
          </div>
          <div className="right">
            <img
              ref={ref}
              //   style={{ width: "60%", height: "60%", marginLeft: "5px" }}
              src={logo}
              alt="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
