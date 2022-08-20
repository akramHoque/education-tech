import React from 'react';
import Banner from '../Bannner/Banner';
import Benifit from '../Benifit/Benifit';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
      <Benifit></Benifit>
    </div>
  );
};

export default Home;