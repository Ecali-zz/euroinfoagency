import React from 'react';

import '../styles/home.css'


function ContactInfo() {
  return (
    <div className="App">
        <p className='display-4'>
            CONTATTACI
        </p>
        <p>28041 Arona NO, Italia</p>
        <p> <a href='mailto:direzione@euroinfoagency.it' className='link'> direzione@euroinfoagency.it</a> </p>
        <p>0322248850</p>
    </div>
        
  );
}

export default ContactInfo;
