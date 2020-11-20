import React from 'react';

import ContactInfo from './contact-info'
import ContactForm from './contact-form'

import '../styles/home.css'

import {Container, Row, Col} from 'react-bootstrap'

function Contact() {
  return (
    <div className="App chi-div margin-20-contact">
        <Container>
            <Row>
                <Col>
                    <ContactInfo></ContactInfo>
                </Col>
                <Col>
                    <ContactForm></ContactForm>
                </Col>
            </Row>
        </Container>
    </div>
        
  );
}

export default Contact;
