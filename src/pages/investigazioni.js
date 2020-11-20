import React from 'react';

import {Row, Col } from 'react-bootstrap'

import Foto from '../img/spy.jpg'

function Investigazioni() {
  return (
    <div className="App">
     <Row>
       <Col>
          <div className='text-div text-margin'>
            <p className='h2'>INVESTIGAZIONI IN AMBITO PRIVATO E AZIENDALE</p>
            <div className='bigtext text-left '>
              <p>
                <ul>
                  <li>Servizi investigativi in Italia e all'Estero;</li>
                  <li>Ricerche, indagini difensive, servizi di sicurezza;</li>
                    <li>Intestazione beni mobili (automezzi e motocicli) visure PRA;</li>
                    <li>Investigazioni anti frode e accertamenti per conto di compagnie assicurative.</li>
                </ul>
              </p>
            </div>
          </div>
       </Col>
       <Col>
        <Row>
          <Col></Col>
          <Col xs={6}>
          <div className='right-photo'>
              <img src={Foto} alt='visure e certificati' className='right-photo-img'></img>
            </div>
          </Col>
          <Col></Col>
        </Row>
            
       </Col>
     </Row>
    </div>
  );
}

export default Investigazioni;
