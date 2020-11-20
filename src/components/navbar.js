import React from 'react';

import '../styles/cssnav.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

import {Link} from 'react-router-dom'

function TopNav() {
  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
            <Navbar.Brand>         
                <Link to='/'> 
                    Euroinfoagency
                </Link>
            </Navbar.Brand>
         
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                    <Nav.Link >
                        <Link className='link-nav' to='/informativa'>
                            Informativa Privacy
                        </Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link className='link-nav' to='/informazioni'>
                            Imformazioni per il recupero del credito
                        </Link>
                    </Nav.Link>
            <NavDropdown title="Altro" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <Link className='link-nav' to='/investigazioni'>
                            Investigazioni in Ambito privato e aziendali
                        </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link className='link-nav' to='/visure'>
                            Visure e Certificati
                        </Link>
                    </NavDropdown.Item>           
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default TopNav;
