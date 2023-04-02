import React from 'react';
import About from './About';
import WhatWeDo from './WhatWeDo';
import Vision from './Vision'
import Letter from './Letter';
import WhyAtimid from './WhyAtimid';
import Contact from './Contact';

function Home() {
  return (
    <div className='pt-12'>
      <About />
      <WhatWeDo />
      <Vision />
      <Letter />
      <WhyAtimid />
      <Contact />
    </div>
  )
}

export default Home;