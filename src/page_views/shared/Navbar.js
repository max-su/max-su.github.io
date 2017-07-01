import React from 'react';
import { Link } from 'react-router-dom';
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
    <nav className="emperor-gray-background">
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

