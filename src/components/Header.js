import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Container fluid>
            <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1"> <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                <Nav.Link href="#action2">Login</Nav.Link>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
