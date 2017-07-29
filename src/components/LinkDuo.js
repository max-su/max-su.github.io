import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import isExternal from 'is-url-external';


/**
 * Link that also works for external URL's
 */
export default function LinkDuo(props) {
  return (isExternal(props.to) ?
    (
      <a
        href={props.to}
        {...props}
      />
    )
    :
    (
      <Link {...props} />
    )
  );
}

LinkDuo.propTypes = {
  to: PropTypes.string.isRequired,
};
