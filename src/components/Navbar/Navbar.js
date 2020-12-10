import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";

// Imgs
import logo from "imgs/logo.svg";
import star from "imgs/star.svg";
import cart from "imgs/cart.svg";

const Navbar = () => {
  return (
    <header className="header d-flex justify-content-between align-items-center py-2 px-5">
      <Link to="/">
        <div className="nav-logo d-flex">
          <img src={logo} alt="logo" className="nav-logo-img mr-2" />
          <span className="nav-logo-text">Shoe Shop</span>
        </div>
      </Link>
      <nav className="nav">
        <NavLink className="nav-link" to="/all">
          All
        </NavLink>
        <NavLink className="nav-link" to="/sneakers">
          Sneakers
        </NavLink>
        <NavLink className="nav-link" to="/boots">
          Boots
        </NavLink>
        <NavLink className="nav-link" to="/sandals">
          Sandals
        </NavLink>
        <NavLink className="nav-link" to="/favourites">
          <Tooltip
            shouldWrapChildren
            label="Favourites"
            placement="bottom"
            bg="#222"
          >
            <img src={star} alt="favs" />
          </Tooltip>
        </NavLink>
        <NavLink className="nav-link" to="/cart">
          <Tooltip shouldWrapChildren label="Cart" placement="bottom" bg="#222">
            <img src={cart} alt="cart" />
          </Tooltip>
        </NavLink>
        <NavLink className="nav-link button button--black" to="/sign-up">
          Sign up
        </NavLink>
        <NavLink className="nav-link button button--white" to="/sign-in">
          Sign in
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
