import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/App';

ReactDOM.render(
  <main>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </main>,
  document.getElementById('root'),
);
