import React from 'react';
import Header from 'src/page_views/shared/Header';
import Navbar from 'src/page_views/shared/Navbar';
import Footer from 'src/page_views/shared/Footer';

export function Home({ match }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        <p>Whomst</p>
      </div>
      <Footer />
    </div>
  );
}

Home.propTypes = {
  match: React.PropTypes.object.isRequired,
};

export default Home;
