import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Blog
          </Link>
          <a
            href="#"
            className="navbar-burger "
            onClick={() => {
              setActive(!active);
            }}
          >
            <span className="burger"></span>
            <span className="burger"></span>
            <span className="burger"></span>
            <span className="burger"></span>
          </a>
        </div>
        <div className={`navbar-menu ${active ? "is-active" : ""}`}>
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/news" className="navbar-item">
              News
            </Link>
            <Link className="navbar-item">Music</Link>
            <Link className="navbar-item">Entertainment</Link>
            <Link className="navbar-item">Contact Us</Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
