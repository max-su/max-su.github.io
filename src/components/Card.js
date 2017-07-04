import React from 'react';
// import PropTypes from 'prop-types';

import { CardBackground,
         CardText } from 'src/assets/style_constants.js';
import 'src/assets/styles/_cards.scss';

export default function Card() {
  return (
    <div className={`card ${CardBackground}`}>
      <div className={`card-content ${CardText}`}>
        Whomst
      </div>
    </div>
  );
}

// Card.defaultProps = {

// };

// Card.propTypes = {

// };
