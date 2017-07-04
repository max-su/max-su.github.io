import React from 'react';

import Card from 'src/components/Card';
import { agribleChip, uiucChip } from 'src/assets/Chips';

import { MainBackground, MainLinks } from 'src/assets/style_constants.js';
import 'src/assets/styles/_main.scss';

export default function Main() {
  const educationBody = (
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
  const bigBody = (
    <p>
      我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢
      我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢
      我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢
      我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢
    </p>
  );
  return (
    <main className={MainBackground}>
      <div className="container">
        <div className="col s12 m6">
          <div className="cards-container row">
            <Card
              header={'Education'}
              body={educationBody}
              pills={[agribleChip, uiucChip]}
            />
            {/* Test */}
            <Card
              header={'Work'}
              body={employmentBody}
            />
            <Card
              header={'Work'}
              body={employmentBody}
            />
            <Card
              header={'Test'}
              body={bigBody}
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
