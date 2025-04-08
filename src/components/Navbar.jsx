{/*import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar text">
      <div className="logo">Otusone</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;



import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Otusone Logo" height="70" />
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4 align-items-center">
            <li className="nav-item"><a className="nav-link fw-bold" href="#">HOME</a></li>
            <li className="nav-item"><a className="nav-link fw-bold" href="#">ABOUT</a></li>
            <li className="nav-item"><a className="nav-link fw-bold" href="#">SERVICES</a></li>
            <li className="nav-item"><a className="nav-link fw-bold" href="#">PORTFOLIO</a></li>
            <li className="nav-item"><a className="nav-link fw-bold" href="#">CAREER</a></li>
            <li className="nav-item">
              <a
                className="btn text-white fw-bold px-4"
                style={{ backgroundColor: '#72145b' }}
                href="#"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/}


// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white py-3 px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Otusone Logo" height="80" />
        </a>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4 align-items-center">
            <li className="nav-link fw-bold">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-link fw-bold">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-link fw-bold">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-link fw-bold">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li className="nav-link fw-bold">
              <Link to="/career" className="nav-link">Career</Link>
            </li>
            <li className="nav-item">
              <a
                className="btn text-white fw-bold px-4"
                style={{ backgroundColor: '#72145b' }}
                href="#"
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

