import React from 'react';
import HeroNike from '../../images/hero-1.jpg';

function Home() {
  return (
    <div className="container mx-auto">
      <section>
        <img src={HeroNike} alt="Hero Nike" />
      </section>
    </div>
  )
}

export default Home;