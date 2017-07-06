import React from 'react';
import Chip from 'src/components/Chip';

import reactJs from 'src/assets/images/reactJs.svg';
import python from 'src/assets/images/python.png';
import django from 'src/assets/images/django.png';
import nodeJs from 'src/assets/images/nodeJs.svg';
import java from 'src/assets/images/java.png';
import c from 'src/assets/images/c.png';
import cplusplus from 'src/assets/images/c++.png';
import tux from 'src/assets/images/tux.png';
import rails from 'src/assets/images/rails.png';
import socketIO from 'src/assets/images/socketIo.png';
import sass from 'src/assets/images/sass.svg';

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
export const djangoChip = (
  <Chip
    image={django}
    textAltImage={'Django'}
    url={'https://www.djangoproject.com/'}
  >
    Django
  </Chip>
);
export const nodeJsChip = (
  <Chip
    image={nodeJs}
    textAltImage={'Node.js'}
    url={'https://nodejs.org/en/'}
  >
    Node.js
  </Chip>
);
export const socketIOChip = (
  <Chip
    image={socketIO}
    textAltImage={'Socket.io'}
    url={'https://socket.io/'}
  >
    Socket.io
  </Chip>
);
export const javaChip = (
  <Chip
    image={java}
    textAltImage={'Java'}
    url={'https://go.java/index.html'}
  >
    Java
  </Chip>
);
export const cChip = (
  <Chip
    image={c}
    textAltImage={'C Programming Language'}
    url={'http://cs241.cs.illinois.edu/'}
  >
    C
  </Chip>
);
export const cplusplusChip = (
  <Chip
    image={cplusplus}
    textAltImage={'C++ Programming Language'}
    url={'https://chara.cs.illinois.edu/cs225'}
  >
    C++
  </Chip>
);
export const unixChip = (
  <Chip
    image={tux}
    textAltImage={'Tux Penguin'}
    url={'http://www.unix.org/what_is_unix.html'}
  >
    Unix
  </Chip>
);
export const railsChip = (
  <Chip
    image={rails}
    textAltImage={'Ruby on Rails'}
    url={'http://rubyonrails.org/'}
  >
    Rails
  </Chip>
);
export const sassChip = (
  <Chip
    image={sass}
    textAltImage={'SASS/SCSS'}
    url={'http://sass-lang.com/'}
  >
    Sass/Scss
  </Chip>
);
