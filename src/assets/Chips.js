import React from 'react';
import Chip from 'src/components/Chip';

import reactJs from 'src/assets/images/reactJs.svg';
import python from 'src/assets/images/python.png';

export const reactChip = (
  <Chip
    image={reactJs}
    textAltImage={'React.js'}
    url={'https://facebook.github.io/react/'}
  >
    React.js
  </Chip>
);
export const pythonChip = (
  <Chip
    image={python}
    textAltImage={'Python'}
    url={'https://www.python.org/'}
  >
    Python
  </Chip>
);
// export const agribleChip = (
//   <Chip
//     url={'http://www.agrible.com/'}
//   >
//     Agrible
//   </Chip>
// );
// export const uiucChip = (
//   <Chip
//     url={'http://illinois.edu/'}
//   >
//     University of Illinois at Urbana-Champaign
//   </Chip>
// );
