import React from 'react';
import { FooterClassHeaderText,
         FooterClassText,
         FooterClassTextActive,
         BackgroundClass } from 'src/assets/style_constants.js';
import ListItemsLink from 'src/components/ListItems';

import 'src/assets/styles/_footer.scss';

export default function Footer() {
  const arrayTextUrl = [['/whomst', 'whomst'],
                        ['/whomst', 'whomst']];
  return (
    <footer className={`page-footer ${BackgroundClass}`}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className={FooterClassHeaderText}>Footer Content</h5>
            <p className={FooterClassText}>
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className={FooterClassHeaderText}>Links</h5>
            <ListItemsLink
              textClass={FooterClassText}
              textActiveClass={FooterClassTextActive}
              arrayTextUrl={arrayTextUrl}
            />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className={`${FooterClassText} container`}>
          © 2014 Copyright Text
          <a className={`${FooterClassText} right`} href="#!">More Links</a>
        </div>
      </div>
    </footer>
  );
}
