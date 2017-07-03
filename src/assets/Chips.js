import React from 'react';
import Chip from 'src/components/Chip';

import reactJsSVG from 'src/assets/images/reactJs.svg';

export const reactChip = (
  <Chip
    image={reactJsSVG}
    textAltImage={'React.js SVG'}
    url={'https://facebook.github.io/react/'}
  >
    React.js
  </Chip>
);
