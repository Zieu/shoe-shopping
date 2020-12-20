import React from "react";
import { Link } from "react-router-dom";
import logo from "imgs/logo.svg";
import { Button } from "@chakra-ui/react";

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
                <Button
                  bg="black"
                  _hover={{ color: "white", bg: "gray.700" }}
                  color="white"
                  variant="solid"
                  fontWeight="500"
                  size="lg"
                >
                  Sign up
                </Button>
              </Link>
              <Link className="nav-link" to="/sign-in">
                <Button
                  bg="white"
                  _hover={{ color: "black", bg: "gray.100" }}
                  color="black"
                  variant="outline"
                  fontWeight="500"
                  size="lg"
                  borderColor="black"
                >
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
