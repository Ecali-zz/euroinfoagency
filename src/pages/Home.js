import React from 'react';

import Welcome from '../components/welcome'
import Chi from '../components/chi'
import Service from '../components/service'
import Lente from '../components/lente'
import Contact from '../components/contact'
import Foot from '../components/footer'
function Home() {
  return (
    <div className="App">
     <Welcome></Welcome>
     <Chi></Chi>
     <Service></Service>
     <Lente></Lente>
     <Contact></Contact>
    </div>
  );
}

export default Home;
