import React from 'react';

import Footer from 'src/components/Footer';
import { FooterClassText } from 'src/assets/style_constants.js';
import { reactChip } from 'src/assets/Chips';


export default function FooterWrapper() {
  const title = 'Footer';
  const arrayTextUrls =
    [['/whomst', 'whomst'],
      ['/whomst', 'whomst']];
  const mainContent = (
    <div className={FooterClassText}>
      Created with {reactChip}
    </div>
  );
  return (
    <Footer
      title={title}
      arrayTextUrls={arrayTextUrls}
      mainContent={mainContent}
    />
  );
}
