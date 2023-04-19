import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <>
      <nav className={`navbar navbar-dark ${props.color} navbar-expand-sm`}>
        <div className="container">
          <Link to="/" className="navbar-brand">
            {props.heading}
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
