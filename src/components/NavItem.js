import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavItem(props) {
  const url = props.url;
  return (
    <li>
      <Link className={'flow-text'} to={url}>{props.children}</Link>
    </li>
  );
}

NavItem.defaultProps = {
  url: '',
  children: '',
};

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
