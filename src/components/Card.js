import React from 'react';
import PropTypes from 'prop-types';

import { CardBackground,
         CardText } from 'src/assets/style_constants.js';
import 'src/assets/styles/_cards.scss';

export default function Card(props) {
  const columnClass = props.columnClass;
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
    <div className={`col ${columnClass}`}>
      <div className={`card ${CardBackground}`}>
        <div className={`card-content ${CardText}`}>
          <span className="card-title">
            {header}
          </span>
          {body}
        </div>
        {actionItem}
      </div>
    </div>
  );
}

Card.defaultProps = {
  columnClass: 's12 m6',
  actionItem: null,
};

Card.propTypes = {
  columnClass: PropTypes.string,
  header: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  actionItem: PropTypes.object,
};
