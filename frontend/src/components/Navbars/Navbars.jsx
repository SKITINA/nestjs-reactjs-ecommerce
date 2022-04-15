import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    //hnadarna navbar dark 
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>

      <Container>
        {/* had likcontainer to home l brand */}
        <LinkContainer to="/">
          <Navbar.Brand href="#home">Brand</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* nfss chi hna to /category query cat tkon smiha clothes */}
            <NavDropdown title="categories" id="basic-nav-dropdown">
            <LinkContainer to="/category?cat=clothes">
              <NavDropdown.Item>clothes</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category?cat=accessory">
                <NavDropdown.Item>Accesory</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/category?cat=chaussures">
              <NavDropdown.Item>chaussures</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/category?cat=robes">
              <NavDropdown.Item>Robes</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/about" ><Nav.Link href="#link">about</Nav.Link></LinkContainer>

            <LinkContainer to="/contact" ><Nav.Link href="#link">contact</Nav.Link></LinkContainer>
          </Nav>
          <Nav className="d-flex align-items-center">
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">log out</NavDropdown.Item>
            </NavDropdown>
            <Link to="/cart" className="text-white-50">
              {/* hadi katjib lina icon */}
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
