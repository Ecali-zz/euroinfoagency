import React from 'react';

import {Row, Col} from 'react-bootstrap'

import '../styles/con.css'

import Foto from '../img/under.jpg'

function Construction() {
  return (
    <div className="gigi">
        <Row>
        <Row>
       <Col>
          <div className='text-div text-margin'>
            <p className='h2'>Euro Info Agency</p>
            <div className='bigtext text-left '>
              <p className='display-2'>
                  <strong>
                    Stiamo per lanciare il nostro nuovo sito tra pochissimo
                  </strong>
              </p>
            </div>
          </div>
       </Col>
       <Col>
        <Row>
          <Col></Col>
          <Col xs={6}>
          <div className='right-photo-con'>
              <img src={Foto} alt='visure e certificati' className='right-photo-img'></img>
            </div>
          </Col>
          <Col></Col>
        </Row>
            
       </Col>
     </Row>
        </Row>
    </div>
  );
}

export default Construction;
