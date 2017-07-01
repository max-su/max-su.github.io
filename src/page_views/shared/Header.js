import React from 'react';

import MaxSuJPG from 'src/assets/images/max.jpg';
import { BackgroundClass } from 'src/assets/style_constants.js';
import 'src/assets/styles/_header.scss';

export default function Header() {
  return (
    <header className="center-align">
      <div className={BackgroundClass} id="header">
        <img className="circle responsive-img" id="header_icon" src={MaxSuJPG} alt="Max Su" />
        <h4 className="bitter-sweet-red-text">Max Su</h4>
        <p className="aqua-background emperor-gray-text">Software Engineer</p>
      </div>
    </header>
  );
}
