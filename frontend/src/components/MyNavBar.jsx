import { Navbar, Nav } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";

const MyNavBar = function () {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src="\assets\attachment_18329574.png" width="80" className="d-inline-block align-top" alt="React Bootstrap logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavBar;
