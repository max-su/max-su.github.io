import React from 'react';
import NavBar from 'src/components/NavBar';
import NavItem from 'src/components/NavItem';
import { BackgroundClass } from 'src/assets/style_constants.js';
import 'src/assets/styles/_navbar.scss';

export default function NavBarWrapper() {
  return (
    <NavBar className={BackgroundClass}>
      <NavItem url={'home'}>Home</NavItem>
      <NavItem url={'https://github.com/max-su/resume/raw/master/max_su_resume/max_su_resume.pdf'}>Resume</NavItem>
    </NavBar>
  );
}
