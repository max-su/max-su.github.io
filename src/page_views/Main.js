import React from 'react';

import { MainBackground } from 'src/assets/style_constants.js';
import Card from 'src/components/Card';
import 'src/assets/styles/_main.scss';

export default function Main() {
  return (
    <main className={MainBackground}>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
}
