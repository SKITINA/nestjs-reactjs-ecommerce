import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'><Navbar.Brand href="#home">Brand</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">clothes</NavDropdown.Item>
             <LinkContainer to='/category?cat=Accessory'><NavDropdown.Item href="#action/3.2">Accesory</NavDropdown.Item></LinkContainer>
              <NavDropdown.Item href="#action/3.3">chaussures</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Robes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">about</Nav.Link>
            <Nav.Link href="#link">contact</Nav.Link>
            </Nav>
         <Nav className="d-flex align-items-center">
          <NavDropdown title={<FontAwesomeIcon icon={faUser}/>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">log out</NavDropdown.Item>
            
            </NavDropdown>
            <Link to="/cart" className="text-white-50"><FontAwesomeIcon icon={faCartShopping}/></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
