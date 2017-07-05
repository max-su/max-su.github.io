import React from 'react';

import Card from 'src/components/Card';
import BoldText from 'src/components/BoldText';
import { pythonChip,
  reactChip,
  djangoChip,
  socketIOChip,
  nodeJsChip,
  sassChip,
  railsChip,
  javaChip,
  cplusplusChip,
  cChip } from 'src/assets/Chips';

import { MainBackground, MainLinks } from 'src/assets/style_constants.js';
import 'src/assets/styles/_main.scss';

export default function Main() {
  const educationBody = (
    <p>
      I&apos;m a&nbsp;
      <BoldText>
         junior studying Computer Science & Statistics
      </BoldText>
      &nbsp;at the&nbsp;
      <BoldText>
        University of Illinois at Urbana-Champaign.
      </BoldText>
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
  const lolChimeBody = (
    <div>
      <blockquote>
        A CLI utility for League of Legends with over 10,000 downloads on NPM.
      </blockquote>
      <p>
        A terminal utility & a web application that helps people play League of Legends with their
        friends. It notifies players when their friends are finished with their game with
        an audio notification.
      </p>
    </div>
  );
  const storyTimeBody = (
    <div>
      <blockquote>
        A bilingual web application for undocumented immigrants to share
        their stories and hardships.
      </blockquote>
      <p>
        A web application written for Make The Road NJ, a nonprofit organization in
        Elizabeth, NJ that helped gain popular support for&nbsp;
        <a className="bitter-sweet-red-text" href="http://elizabethnj.org/elizabeth-municipal-id-program">
          legislation
        </a>
        &nbsp;that allowed all residents (documented and undocumented) to get municipal IDs.
      </p>
    </div>
  );
  return (
    <main className={MainBackground}>
      <div className="container">
        <div className="col s12 m6">
          <div className="cards-container row">
            <Card
              header={'Education'}
              body={educationBody}
              pills={[javaChip, cplusplusChip, cChip]}
            />
            <Card
              header={'Employment'}
              body={employmentBody}
              pills={[pythonChip, djangoChip, reactChip]}
            />
            <Card
              header={'LoL Chime 🎐'}
              body={lolChimeBody}
              pills={[nodeJsChip, socketIOChip]}
            />
            <Card
              header={'Story Time 📖'}
              body={storyTimeBody}
              pills={[railsChip, sassChip]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
