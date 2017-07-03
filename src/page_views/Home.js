import React from 'react';
import Header from 'src/page_views/shared/Header';
import NavBarWrapper from 'src/page_views/shared/NavBarWrapper';
import FooterWrapper from 'src/page_views/shared/FooterWrapper';
import Main from 'src/page_Views/Main';

// export function Home({ match }) {
export function Home() {
  return (
    <div>
      <Header />
      <NavBarWrapper />
      <Main />
      <FooterWrapper />
    </div>
  );
}

// Home.propTypes = {
//   match: React.PropTypes.object.isRequired,
// };

export default Home;
