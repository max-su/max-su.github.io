import React from 'react';
import PropTypes from 'prop-types';

import { BackgroundClass } from 'src/assets/style_constants.js';

export default function NavBar(props) {
  const className = props.className;
  return (
    <nav className={className}>
      <div className={'nav-wrapper'}>
        <div className="col s12">
          <ul className={'center'}>
            {props.children}
          </ul>
        </div>
      </div>
    </nav>
  );
}

NavBar.defaultProps = {
  className: BackgroundClass,
  children: [],
};

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
