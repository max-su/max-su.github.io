import React from 'react';
import PropTypes from 'prop-types';

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
  className: 'emperor-gray-background',
  children: [],
};

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
