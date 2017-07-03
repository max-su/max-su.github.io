import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { BackgroundClass } from 'src/assets/style_constants.js';
import 'src/assets/styles/_navbar.scss';

export default function NavBar() {
  return (
    <Navbar className={BackgroundClass}>
      <NavItem href={'home'}>Home</NavItem>
      <NavItem href={'resume'}>Resume</NavItem>
      <NavItem href={'resources'}>Resources</NavItem>
    </Navbar>
  );
}
