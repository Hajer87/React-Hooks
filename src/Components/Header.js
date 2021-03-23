import React from "react";
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import '../styles/navbar.css'


function Header({setRating}) {
  
  return (
    <div className='bar'>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <img
        alt=""
        src="https://logodix.com/logo/310993.gif"
        width="100"
        height="50"
        className="d-inline-block align-top"
      />{' '}
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Movies</Nav.Link>
      
      <NavDropdown title="Rating" id="basic-nav-dropdown" >
              {[1,2,3,4,5].map(el=><NavDropdown.Item style={{fontSize:'large'}}onClick={(e)=>setRating(e.target.innerHTML)}>{el}</NavDropdown.Item>)}
              </NavDropdown>
             
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      
    </div>
  );
}

export default Header;
