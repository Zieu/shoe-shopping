import React from "react";
import { Link } from "react-router-dom";
import logo from "imgs/logo.svg";

const Hero = () => {
  return (
    <div className="hero d-flex justify-content-between align-items-center">
      <div className="container">
        <div className="row">
          <div className="hero-bg"></div>
          <div className="hero-wrapper">
            <img src={logo} alt="Logo" width="150" />
            <h1 className="hero-title">
              IT’S SHOE SHOP <br /> BUY STUFF OR SELL STUFF
            </h1>
            <p className="hero-par">
              Lorem consecetur ipsum dolor Lorem ipsum dolor si dolor to
              consecetur amet lorem isum.
            </p>
            <div className="hero-buttons m-4">
              <Link className="nav-link" to="/sign-up">
                <button className="button button--black">Sign up</button>
              </Link>
              <Link className="nav-link" to="/sign-in">
                <button className="button button--white">Sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
