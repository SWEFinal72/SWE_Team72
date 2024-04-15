import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar>
      <div className="navbar-main" style={{ display: "flex", justifyContent: 'space-between', width: '100%',alignItems:"left" }}>

        <div className = "navbar-logo-navlinks" style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
        <Navbar.Brand href="/">InsertLogoHere</Navbar.Brand>
        <Nav className="nav-links-container">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/current_reservations">Current Reservations</NavLink>
          <NavLink to="/cars_and_services">Cars & Services</NavLink>
          </Nav>
        </div>
        
        <div className = "navbar-buttons" style={{display:"flex",alignItems:"center", gap: "20px"}}>

        <Nav>
          <Link to="/login">
          <Button >Login</Button>
          </Link>
          <Link to="/signup-button">
          <Button >Sign Up</Button>
          </Link>
        </Nav>
        </div>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
