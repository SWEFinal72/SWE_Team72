import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <>
      <Navbar>
      <Navbar.Brand href="/">InsertLogoHere</Navbar.Brand>
          <Nav className="nav-links-container">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/current_reservations">Current Reservations</Nav.Link>
            <Nav.Link href="/cars_and_services">Cars & Services</Nav.Link>
          </Nav>
          <Nav className='nav-buttons'>
            <Button href="/login-button">Login</Button>
            <Button href="/signup-button">Sign Up</Button>
          </Nav>
        </Navbar>
      </>
    );
}

export default CustomNavbar;
