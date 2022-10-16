import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

export default function MyNavbar() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Send email and password to backend using post request
    navigate('/login')
  };
  const handleSignup = (e) => {
    e.preventDefault();
    // Send email and password to backend using post request
    navigate('/signup')
  };
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#"> <img src={require("../assets/triologo.jpg")} className="brand-logo w-nav-brand w--current" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft: "50px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">WHY TRIO</Nav.Link>
            <NavDropdown title="SOLUTONS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                All Talent Experience Solution
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Mentorship program
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Connectivity program
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PRODUCTS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">PRODUCT</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="RESOURCES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">PRODUCT</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="COMPANY" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">PRODUCT</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PRICING" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">PRODUCT</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Button color="inherit" variant="outlined" onClick={handleLogin} sx={{ mr: 1 }}>
            Login
         </Button>
          <Button style={{ marginRight: "10%" }} color="inherit" variant="outlined" onClick={handleSignup}>
            Sign Up
        </Button>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};