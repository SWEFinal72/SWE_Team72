import { Navbar, Nav, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/RoadsterRentalsLogo.png'

function CustomNavbar() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={wordmark}
    //         width="200"
    //         height="50"
    //         className="d-inline-block align-top"
    //         alt="Roadster Rentals Logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


    <Navbar>
      <div className="navbar-main" style={{ display: "flex", justifyContent: 'space-between', width: '100%', alignItems: "left" }}>

        <div className="navbar-logo-navlinks" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Roadster Rentals logo"
            />
          </Navbar.Brand>
          <Nav className="nav-links-container">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/current_reservations">Current Reservations</NavLink>
            <NavLink to="/cars_and_services">Cars & Services</NavLink>
          </Nav>
        </div>

        <div className="navbar-buttons" style={{ display: "flex", alignItems: "center", gap: "20px" }}>

          <Nav>
            <Link to="/login">
              <Button >Login</Button>
            </Link>
            <Link to="/signup-button" className="navbar-buttons a">
              <Button >Sign Up</Button>
            </Link>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
