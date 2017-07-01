import React from 'react';
import 'src/assets/styles/_navbar.scss';

export default function Navbar() {
  return (
    <nav className="emperor-gray-background">
      <a href="#!" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <div className="nav-wrapper center">
        <ul className="hide-on-med-and-down center">
          {
          // <li><a className="center" href="sass.html">Sass</a></li>
          // <li><a className="center" href="badges.html">Components</a></li>
          // <li><a className="center" href="collapsible.html">Javascript</a></li>
          // <li><a className="center" href="mobile.html">Mobile</a></li>
          }
        </ul>
      </div>
    </nav>
  );
}
