import React from 'react';

import Card from 'src/components/Card';
// import { mfrChip } from 'src/assets/Chips';

import { MainBackground, MainLinks } from 'src/assets/style_constants.js';
import 'src/assets/styles/_main.scss';

export default function Main() {
  // const aboutMeBody = (
  //   <p>
  //     Hi! My name is Max and I&apos;m a junior studying Computer Science & Statistics at the
  //     University of Illinois at Urbana-Champaign. I&apos;m currently working as a full stack
  //     software engineering intern at&nbsp;
  //     <a href="http://www.agrible.com/" className={MainLinks}>
  //       <span role="img" aria-label="Chicken Emoji">
  //         🐓
  //       </span>
  //       Agrible
  //     </a>
  //     &nbsp;writing React.js and Python.
  //   </p>
  // );
  const aboutMeBody = (
    <p>
      Hi! My name is Max and I&apos;m a junior studying Computer Science & Statistics at the
      University of Illinois at Urbana-Champaign.
    </p>
  );
  const employmentBody = (
    <p>
      I&apos;m currently working as a full stack software engineering intern at&nbsp;
        <a href="http://www.agrible.com/" className={MainLinks}>
          <span role="img" aria-label="Chicken Emoji">
            🐓
          </span>
          Agrible
        </a>
      &nbsp;writing React.js and Python.
    </p>
  );
  return (
    <main className={MainBackground}>
      <div className="container">
        <div className="col s12 m6">
          <div className="cards-container row">
            <Card
              header={'About me'}
              body={aboutMeBody}
            />
            <Card
              header={'Work'}
              body={employmentBody}
            />
            <Card
              header={'Work'}
              body={employmentBody}
            />
            <Card
              header={'Work'}
              body={employmentBody}
            />
            <Card
              header={'Work'}
              body={employmentBody}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
