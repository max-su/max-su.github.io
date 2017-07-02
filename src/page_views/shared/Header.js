import React from 'react';

import MaxSuJPG from 'src/assets/images/max.jpg';
import { BackgroundClass,
         HeaderText,
         HeaderButtonBackground,
         HeaderButtonText } from 'src/assets/style_constants.js';
import 'src/assets/styles/_header.scss';

export default function Header() {
  return (
    <header className="center-align">
      <div className={BackgroundClass} id="header">
        <img className="circle responsive-img" id="header_icon" src={MaxSuJPG} alt="Max Su" />
        <h4 className={HeaderText}>Max Su</h4>
        <p className={`${HeaderButtonBackground} ${HeaderButtonText}`}>Software Engineer</p>
      </div>
    </header>
  );
}
