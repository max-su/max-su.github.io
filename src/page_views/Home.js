import React from 'react';
import Header from 'src/page_views/shared/Header';
import NavBarWrapper from 'src/page_views/shared/NavBarWrapper';
import Footer from 'src/page_views/shared/Footer';
import Main from 'src/page_Views/Main';

// export function Home({ match }) {
export function Home() {
  return (
    <div>
      <Header />
      <NavBarWrapper />
      <Main />
      <Footer />
    </div>
  );
}

// Home.propTypes = {
//   match: React.PropTypes.object.isRequired,
// };

export default Home;
