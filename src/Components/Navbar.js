import { Navbar, Nav, Container } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <>
          <Navbar>
          <Navbar.Brand href="#home">InsertLogoHere</Navbar.Brand>
            <Container>
              <Nav className="nav-links-container">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#current_reservations">Current Reservations</Nav.Link>
                <Nav.Link href="#cars_and_services">Cars & Services</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default CustomNavbar;
