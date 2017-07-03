import React from 'react';
import PropTypes from 'prop-types';

import { ChipBackground,
         ChipText } from 'src/assets/style_constants.js';
import 'src/assets/styles/_chips.scss';

export default function Chip(props) {
  const textAltImage = props.textAltImage;
  const image = props.image;
  const url = props.url;
  const chip = (
    <div className={`chip ${ChipBackground} ${ChipText}`}>
      <img src={image} alt={textAltImage} />
      {props.children}
    </div>
  );

  if (url != null) {
    return (
      <a href={url}>
        {chip}
      </a>
    );
  }
  return chip;
}

Chip.defaultProps = {
  url: null,
};

Chip.propTypes = {
  textAltImage: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired, // SVG
  url: PropTypes.string,
  children: PropTypes.string.isRequired, // Text
};
