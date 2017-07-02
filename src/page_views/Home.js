import React from 'react';
import Header from 'src/page_views/shared/Header';
import NavBar from 'src/page_views/shared/Navbar';
import Footer from 'src/page_views/shared/Footer';
import Main from 'src/page_Views/Main';

// export function Home({ match }) {
export function Home() {
  return (
    <div>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

// Home.propTypes = {
//   match: React.PropTypes.object.isRequired,
// };

export default Home;
