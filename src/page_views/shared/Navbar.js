import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundClass } from 'src/assets/style_constants.js';
import 'src/assets/styles/_navbar.scss';


export default function Navbar() {
  const navItems = (
    <div>
      <li>
        <Link to={'/home'}>Home</Link>
      </li>
      <li>
        <Link to={'/resume'}>Resume</Link>
      </li>
      <li>
        <Link to={'/resources'}>Resources</Link>
      </li>
    </div>
  );
  return (
    <nav className={BackgroundClass}>
      <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <div className="nav-wrapper center">
        <ul className="hide-on-med-and-down center">
          {navItems}
        </ul>
        <ul className="side-nav" id="mobile-demo">
          {navItems}
        </ul>
      </div>
    </nav>
  );
}

