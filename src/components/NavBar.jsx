import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/">Marvel DB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
            <Nav.Link as={Link} to="/create">Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
