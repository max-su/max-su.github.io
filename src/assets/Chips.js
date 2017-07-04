import React from 'react';
import Chip from 'src/components/Chip';

import reactJs from 'src/assets/images/reactJs.svg';
import mfr from 'src/assets/images/mfrIcon.svg';

export const reactChip = (
  <Chip
    image={reactJs}
    textAltImage={'React.js'}
    url={'https://facebook.github.io/react/'}
  >
    React.js
  </Chip>
);
export const mfrChip = (
  <Chip
    image={mfr}
    textAltImage={'Agrible MFR'}
    url={'http://www.agrible.com/'}
  >
    Agrible
  </Chip>
);
