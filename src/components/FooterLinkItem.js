import React from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';

export default function FooterLinkItem(props) {
  const svgImage = props.svgImage;
  const url = props.url;
  const altText = props.altText;
  const image = (
    <Isvg src={svgImage}>
      {altText}
    </Isvg>
  );
  return (
    <a href={url} id={altText} className={'svg-wrapper-footer'}>
      {image}
    </a>
  );
}

FooterLinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  svgImage: PropTypes.string.isRequired,
};
