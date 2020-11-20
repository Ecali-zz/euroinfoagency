import React from 'react';

import '../styles/home.css'

import star from '../img/star.png'

function Lente() {
  return (
    <div className="App back-img-l">
        <div className='margin-20-service'>
            <img src={star} alt='star' width='70'></img>
            <div className='service-text'>
                <p className='h3'>INFORMAZIONI PER IL RECUPERO DEL CREDITO IN AMBITO LEGALE</p>
            </div>
            <img src={star} alt='star' width='70'></img>
            <div className='service-text'>
                <p className='h3'>VISURE E CERTIFICAZIONI</p>
            </div>
            <img src={star} alt='star' width='70'></img>
            <div className='service-text'>
                <p className='h3'>INVESTIGAZIONI IN AMBITO PRIVATO E AZIENDALE</p>
            </div>
        </div>
    </div>
        
  );
}

export default Lente;
