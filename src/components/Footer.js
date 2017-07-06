import React from 'react';
import PropTypes from 'prop-types';
// import ListItemsLink from 'src/components/ListItems';

/* Styling */
import { FooterClassHeaderText,
         FooterClassText,
         BackgroundClass } from 'src/assets/style_constants.js';
import 'src/assets/styles/_footer.scss';
/* Styling */

export default function Footer(props) {
  const title = props.title;
  const mainContent = props.mainContent;
  const footerLinks = props.footerLinks;
  return (
    <footer className={`page-footer ${BackgroundClass}`}>
      <div className="container">
        <div className="row">
          <div className="col l8 s12" id="footerMain">
            <h5 className={FooterClassHeaderText}>{title}</h5>
            {mainContent}
          </div>
          <div className="col l4 s12" id="footerLinks">
            <h5 className={FooterClassHeaderText}>Links</h5>
            {footerLinks}
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className={`${FooterClassText} container`}>
          © {new Date().getFullYear()} Max Su
          <a
            className={`${FooterClassText} right`}
            id={'firefox-link'}
            href="https://github.com/max-su/max-su.github.io/blob/master/LICENSE"
          >
            <span role="img" aria-label="Fox Emoji">🦊</span> Mozilla Public License 2.0
          </a>
        </div>
      </div>
    </footer>
  );
}


Footer.defaultProps = {
  title: '',
  mainContent: <p>Default</p>,
  footerLinks: null,
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  mainContent: PropTypes.object.isRequired,
  footerLinks: PropTypes.array.isRequired,
};
