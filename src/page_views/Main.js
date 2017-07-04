import React from 'react';

import Card from 'src/components/Card';
import BoldText from 'src/components/BoldText';
import { agribleChip, uiucChip, pythonChip, reactChip } from 'src/assets/Chips';

import { MainBackground, MainLinks } from 'src/assets/style_constants.js';
import 'src/assets/styles/_main.scss';

export default function Main() {
  const educationBody = (
    <p>
      Hi! My name is Max and I&apos;m a&nbsp;
      <BoldText>junior studying Computer Science & Statistics</BoldText>
      &nbsp;at the University of Illinois at Urbana-Champaign.
    </p>
  );
  const employmentBody = (
    <p>
      I&apos;m currently working as a&nbsp;
      <BoldText>
        full stack software engineering intern
      </BoldText>
      &nbsp;at&nbsp;
        <a href="http://www.agrible.com/" className={MainLinks}>
          <span role="img" aria-label="Chicken Emoji">
            🐓
          </span>
          Agrible
        </a>
        , a team of agronomists, atmospheric scientists, and developers who share a common goal:
        to transform the future of farming. We help growers realize the promise of big data
        and technology.
    </p>
  );
  // const bigBody = (
  //   <p>
  //     我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢
  //     我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢
  //     我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢
  //     我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢我愛錢
  //   </p>
  // );
  return (
    <main className={MainBackground}>
      <div className="container">
        <div className="col s12 m6">
          <div className="cards-container row">
            <Card
              header={'Education'}
              body={educationBody}
              pills={[uiucChip]}
            />
            <Card
              header={'Employment'}
              body={employmentBody}
              pills={[agribleChip, pythonChip, reactChip]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
