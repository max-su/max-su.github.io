import React from 'react';
import PropTypes from 'prop-types';
import ListItemsLink from 'src/components/ListItems';

/* Styling */
import { FooterClassHeaderText,
         FooterClassText,
         BackgroundClass } from 'src/assets/style_constants.js';
import 'src/assets/styles/_footer.scss';
/* Styling */

export default function Footer(props) {
  const title = props.title;
  const mainContent = props.mainContent;
  const arrayTextUrls = props.arrayTextUrls;
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
            <ListItemsLink
              textClass={FooterClassText}
              arrayTextUrl={arrayTextUrls}
            />
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

const arrayTextUrlDefault = [['/whomst', 'whomst'],
                            ['/whomst', 'whomst']];

Footer.defaultProps = {
  title: '',
  mainContent: <p>Default</p>,
  arrayTextUrls: arrayTextUrlDefault,
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  mainContent: PropTypes.object.isRequired,
  arrayTextUrls: PropTypes.array.isRequired,
};
