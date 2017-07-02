import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function ListItemsLink(props) {
  const textClass = props.textClass;
  const arrayTextUrl = props.arrayTextUrl;

  const listItems = arrayTextUrl.map((item) => {
    return (
      <li key={item.id}>
        <Link
          to={item[0]}
          className={textClass}
          key={item.id}
        >
          {item[1]}
        </Link>
      </li>
    );
  });
  return (
    <ul>
      {listItems}
    </ul>
  );
}

ListItemsLink.propTypes = {
  textClass: PropTypes.string.isRequired,
  arrayTextUrl: PropTypes.array.isRequired,
};
