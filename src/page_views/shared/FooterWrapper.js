import React from 'react';

import Footer from 'src/components/Footer';
import { FooterClassText } from 'src/assets/style_constants.js';

import facebook from 'src/assets/images/facebook.svg';
import linkedin from 'src/assets/images/linkedin.svg';
import github from 'src/assets/images/github.svg';
import email from 'src/assets/images/email.svg';
import FooterLinkItem from 'src/components/FooterLinkItem.js';


export default function FooterWrapper() {
  const title = 'Dependencies';
  const facebookItem = (
    <FooterLinkItem
      url={'https://www.facebook.com/kingmixy'}
      svgImage={facebook}
    />
  );
  const linkedinItem = (
    <FooterLinkItem
      url={'https://www.linkedin.com/in/max-su/'}
      svgImage={linkedin}
    />
  );
  const githubItem = (
    <FooterLinkItem
      url={'https://github.com/max-su'}
      svgImage={github}
    />
  );
  const emailItem = (
    <FooterLinkItem
      url={'mailto:max.su7@gmail.com'}
      svgImage={email}
    />
  );
  const footerLinks = [facebookItem, linkedinItem, githubItem, emailItem];
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
      footerLinks={footerLinks}
      mainContent={mainContent}
    />
  );
}
