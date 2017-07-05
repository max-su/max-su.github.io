import React from 'react';
import PropTypes from 'prop-types';

export default function FooterLinkItem(props) {
  const svgImage = props.svgImage;
  const url = props.url;
  const altText = props.altText;
  const image = (
    <object type="image/svg+xml" data={svgImage}>
      {altText}
    </object>
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
