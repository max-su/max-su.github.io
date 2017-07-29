import React from 'react';
import PropTypes from 'prop-types';
import LinkDuo from 'src/components/LinkDuo';

export default function NavItem(props) {
  const url = props.url;
  return (
    <li>
      <LinkDuo className={'flow-text'} to={url}>{props.children}</LinkDuo>
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
