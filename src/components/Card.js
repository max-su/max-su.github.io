import React from 'react';
import PropTypes from 'prop-types';

import { CardBackground,
         CardTextHeader,
         CardText } from 'src/assets/style_constants.js';
import 'src/assets/styles/_cards.scss';

import bardGif from 'src/assets/images/bard.gif';

export default function Card(props) {
  const header = props.header;
  const body = props.body;

  const pills = props.pills;
  let actionItem = props.actionItem;
  let bard = null;

  if (actionItem != null) {
    actionItem = (
      <div className="card-action">
        {actionItem}
      </div>
    );
  }
  if (header === 'LoL Chime') {
    bard = (
      <img src={bardGif} alt={'Bard'} id={'bard'} />
    );
  }
  return (
    <div className={`card ${CardBackground}`}>
      <div className={`card-content ${CardText}`}>
        <span className={`card-title flow-text ${CardTextHeader}`}>
          {header} {bard}
        </span>
        {body}
      </div>
      <div className="section">
        {pills}
        {actionItem}
      </div>
    </div>
  );
}

Card.defaultProps = {
  actionItem: null,
  pills: null,
};

Card.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
  pills: PropTypes.array,
  actionItem: PropTypes.object,
};
