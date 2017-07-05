import React from 'react';
import PropTypes from 'prop-types';

export default function FooterLinkItem(props) {
  const svgImage = props.svgImage;
  const url = props.url;
  const altText = props.altText;
  const image = (
    <img src={svgImage} id={altText} alt={altText} />
  );
  return (
    <a href={url} className={'svg-wrapper-footer'}>
      {image}
    </a>
  );
}

FooterLinkItem.propTypes = {
  url: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  svgImage: PropTypes.string.isRequired,
};
