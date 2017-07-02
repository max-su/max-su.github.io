import React from 'react';
import { FooterClassHeaderText,
         FooterClassText,
         BackgroundClass } from 'src/assets/style_constants.js';
import ListItemsLink from 'src/components/ListItems';
import Chip from 'src/components/Chip';

import reactJsSVG from 'src/assets/images/reactJs.svg';

import 'src/assets/styles/_footer.scss';

export default function Footer() {
  const arrayTextUrl = [['/whomst', 'whomst'],
                        ['/whomst', 'whomst']];
  const reactChip = (
    <Chip
      image={reactJsSVG}
      textAltImage={'React.js SVG'}
      url={'https://facebook.github.io/react/'}
    >
      React.js
    </Chip>
    );
  return (
    <footer className={`page-footer ${BackgroundClass}`}>
      <div className="container">
        <div className="row">
          <div className="col l10 s12" id="footerMain">
            <h5 className={FooterClassHeaderText}>Dependencies</h5>
            <p className={FooterClassText}>
              Created with {reactChip}
            </p>
          </div>
          <div className="col l2 s12" id="footerLinks">
            <h5 className={FooterClassHeaderText}>Links</h5>
            <ListItemsLink
              textClass={FooterClassText}
              arrayTextUrl={arrayTextUrl}
            />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className={`${FooterClassText} container`}>
          © {new Date().getFullYear()} Max Su
          <a
            className={`${FooterClassText} right`}
            href="https://github.com/max-su/max-su.github.io/blob/master/LICENSE"
          >
            <span role="img" aria-label="Fox Emoji">🦊</span> Mozilla Public License 2.0
          </a>
        </div>
      </div>
    </footer>
  );
}
