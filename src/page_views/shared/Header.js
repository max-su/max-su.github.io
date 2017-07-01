import React from 'react';
import MaxSuJPG from 'src/assets/images/max.jpg';

import 'src/assets/styles/_header.scss';

export default function Header() {
  return (
    <header className="center-align">
      <img className="circle responsive-img" id="header_icon" src={MaxSuJPG} alt="Max Su" />
      <h1> Whomst am I </h1>
    </header>
  );
}
