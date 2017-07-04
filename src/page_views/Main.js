import React from 'react';

import { MainBackground } from 'src/assets/style_constants.js';
import Card from 'src/components/Card';
import 'src/assets/styles/_main.scss';

export default function Main() {
  const aboutMeBody = (
    <p>
      Hi! My name is Max and I&apos;m a junior studying Computer Science & Statistics at the
      University of Illinois at Urbana-Champaign. I&apos;m currently working as a full stack
      software engineering intern at AgribleLink writing React.js and Python.
    </p>
  );
  return (
    <main className={MainBackground}>
      <div className="container">
        <div className="row">
          <Card
            header={'About me'}
            body={aboutMeBody}
          />
        </div>
      </div>
    </main>
  );
}
