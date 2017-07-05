import React from 'react';
import PropTypes from 'prop-types';

import { ChipBackground,
         ChipText } from 'src/assets/style_constants.js';
import 'src/assets/styles/_chips.scss';

export default function Chip(props) {
  const url = props.url;
  let image = props.image;
  const textAltImage = props.textAltImage;

  if (image != null) { // Create image element
    image = (
      <img src={image} alt={textAltImage} />
    );
  }
  const chip = ( // Create the main chip
    <div className={`chip ${ChipBackground} ${ChipText}`}>
      {image}
      {props.children}
    </div>
  );

  if (url != null) { // Wrap it in a link to the url and return it
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
  image: null,
};

Chip.propTypes = {
  image: PropTypes.string, // SVG
  url: PropTypes.string,
  children: PropTypes.string.isRequired, // Text
  textAltImage: PropTypes.string.isRequired, // Text
};
