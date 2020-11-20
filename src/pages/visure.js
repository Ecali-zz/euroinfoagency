import React from 'react';

import {Row, Col} from 'react-bootstrap'

import Foto from '../img/visure.jpg'

function Visure() {
  return (
    <div className="App">
     <Row>
       <Col>
          <div className='text-div text-margin'>
            <p className='h2'>VISURE E CERTIFICATI</p>
            <div className='bigtext text-left '>
              <p>
                <ul>
                  <li>Fornitura di certificazione anagrafiche e di stato civile su tutto il territorio nazionale;</li>
                  <li>Visure ipocatastali con ispezione sull’intero circuito nazionale delle Conservatorie RR.II. 
                    Per individuare la proprietà di beni  immobili, con evidenza di cointestatari e/o vincoli che ne limitano la disponibilità
                    ( ipoteche - pignoramenti)</li>
                    <li>Intestazione beni mobili (automezzi e motocicli) visure PRA;</li>
                    <li>Visure catastali su territorio nazionale.</li>
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

export default Visure;
