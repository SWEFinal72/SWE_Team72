import { Navbar, Nav, Button } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar>
      <div className="navbar-main" style={{ display: "flex", justifyContent: 'space-between', width: '100%',alignItems:"left" }}>

        <div className = "navbar-logo-navlinks" style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
        <Navbar.Brand href="/">InsertLogoHere</Navbar.Brand>
        <Nav className="nav-links-container">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/current_reservations">Current Reservations</Nav.Link>
          <Nav.Link href="/cars_and_services">Cars & Services</Nav.Link>
          </Nav>
        </div>
        
        <div className = "navbar-buttons" style={{display:"flex",alignItems:"center", gap: "20px"}}>

        <Nav>
          <Button href="/login-button">Login</Button>
          <Button href="/signup-button">Sign Up</Button>
        </Nav>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
