import { Button, Navbar } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Navbar bg="light" expand="lg">
      <footer className="mx-auto ">
        <h4>Sign up for our Newsletter</h4>
        <h6>Tell us what books you love</h6>
        <Button variant="primary">Sign Up</Button>{" "}
      </footer>
    </Navbar>
  );
};
export default MyFooter;
