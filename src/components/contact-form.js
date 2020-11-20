import React, {Component} from 'react';

import '../styles/home.css'

import {Form, Col, Button} from 'react-bootstrap'


class ContactForm extends Component {


    state= {
        email:{
            recipient: '',
            sender: '',
            subject: '',
            text: '',
            nome: '',
            telefono: '',
            indirizzo: ''
        }
    }

    sendEmail  = () =>{
        const { email } = this.state;
        fetch( ` http://localhost:400/send-email?recipient=${email.recipient}&sender=ecali301@gmail.com&topic=${email.subject}&text=${email.text} ` )
        .catch(err => console.log(err))
    }

    render() {

        const {email} = this.state;

        return (
            <div className="App">
                <Form onSubmit= ''>
                    <Form.Row>
                        <Form.Group as={Col} controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder=""  value={email.nome} 
                            onChange={e => this.setState({email: {...email, nome: e.target.value}})} 
                            className='input-contact'/>
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="emailfrom">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="mail" placeholder="" value={email.recipient} 
                        onChange={e => this.setState({email: {...email, recipient: e.target.value}})} 
                        className='input-contact'/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="telefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="" value={email.telefono} 
                        onChange={e => this.setState({email: {...email, telefono: e.target.value}})} 
                        className='input-contact'/>
                        </Form.Group>
        
                        <Form.Group as={Col} controlId="indirizzo">
                        <Form.Label>Indirizzo</Form.Label>
                        <Form.Control type="text" placeholder=""  value={email.indirizzo} 
                        onChange={e => this.setState({email: {...email, indirizzo: e.target.value}})}  
                        className='input-contact'/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="oggetto">
                        <Form.Label>Oggetto</Form.Label>
                        <Form.Control type='text' placeholder="" value={email.subject} 
                        onChange={e => this.setState({email: {...email, subject: e.target.value}})}  
                        className='input-contact'/>
                    </Form.Group>
                    <Form.Group controlId="messaggio">
                        <Form.Label>Messaggio</Form.Label>
                        <Form.Control as='textarea' row='5' value={email.text} 
                        onChange={e => this.setState({email: {...email, text: e.target.value}})} 
                        className='input-contact-area'/>
                    </Form.Group>
        
                    <Button variant="dark" type="submit" className='form-button' onClick={this.sendEmail} >
                        Submit
                    </Button>
                </Form>
            </div>
                
          );
    }
  
}

export default ContactForm;
