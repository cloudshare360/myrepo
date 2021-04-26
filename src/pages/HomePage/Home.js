import React from 'react';
import Hero from '../../components/hero'
import { SliderData } from '../../components/SliderData';

function Home() {
  return (
    <>
      <Hero slides={SliderData}/>
    </>
  );
}

export default Home;
