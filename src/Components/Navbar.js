import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function CustomNavbar() {
    return (
        <>
          <Navbar>
          <Navbar.Brand href="/">InsertLogoHere</Navbar.Brand>
            <Container>
              <Nav className="nav-links-container">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/current_reservations">Current Reservations</Nav.Link>
                <Nav.Link href="/cars_and_services">Cars & Services</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default CustomNavbar;
