import React from 'react';
import PropTypes from 'prop-types';

import { CardBackground,
         CardTextHeader,
         CardText } from 'src/assets/style_constants.js';
import 'src/assets/styles/_cards.scss';

export default function Card(props) {
  const header = props.header;
  const body = props.body;
  let actionItem = props.actionItem;

  if (actionItem != null) {
    actionItem = (
      <div className="card-action">
        {actionItem}
      </div>
    );
  }
  return (
    <div className={`card ${CardBackground}`}>
      <div className={`card-content ${CardText}`}>
        <span className={`card-title ${CardTextHeader}`}>
          {header}
        </span>
        {body}
      </div>
      {actionItem}
    </div>
  );
}

Card.defaultProps = {
  actionItem: null,
};

Card.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  actionItem: PropTypes.object,
};
