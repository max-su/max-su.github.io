import React from 'react';

import Footer from 'src/components/Footer';
import { FooterClassText } from 'src/assets/style_constants.js';


export default function FooterWrapper() {
  const title = 'Footer';
  const arrayTextUrls =
    [['/build/resume.pdf', 'Resume']];
  const react = (
    <a className="bitter-sweet-red-text" href="https://facebook.github.io/react/">
      React.js
    </a>
  );
  const materialize = (
    <a className="bitter-sweet-red-text" href="http://materializecss.com/">
      Materialize
    </a>
  );
  const mainContent = (
    <div className={FooterClassText}>
      Written in {react} and {materialize}.
    </div>
  );
  return (
    <Footer
      title={title}
      arrayTextUrls={arrayTextUrls}
      mainContent={mainContent}
    />
  );
}
