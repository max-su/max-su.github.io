import React from 'react';
import PropTypes from 'prop-types';

export default function BoldText(props) {
  return (
    <span className="bolden">
      {props.children}
    </span>
  );
}

BoldText.propTypes = {
  children: PropTypes.string.isRequired,
};
