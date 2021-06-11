import { Jumbotron, Container } from "react-bootstrap";

const Welcome = function () {
  return (
    <Jumbotron>
      <Container>
        <h1>World of Books</h1>
        <p>
          <em>
            An online bookstore that financially supports local independent
            bookstores and gives back to the book community.
          </em>
        </p>
      </Container>
    </Jumbotron>
  );
};
export default Welcome;
