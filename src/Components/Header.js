import React from "react";
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import AddMovie from "./AddMovie";

function Header(props) {
  
  return (
    <div>
      <div className="fixed-top">
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://baptistedrapeau.files.wordpress.com/2019/02/logo-cave-c3a0-film-rond-blanc-rouge-bordeaux.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{' '}
    My First Movie App
    </Navbar.Brand>
     <Navbar fixed="top" />
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
              <NavDropdown title="Rating" id="basic-nav-dropdown" >
              {[5,6,7,8,9,10].map(el=><NavDropdown.Item onClick={(e)=>props.setSearchRating(e.target.innerHTML)}>{el}</NavDropdown.Item>)}
              </NavDropdown>
            </Nav>
            <AddMovie />
            <Form inline>
              <FormControl
                onChange={(e) => props.setSearchKeyword(e.target.value)}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
