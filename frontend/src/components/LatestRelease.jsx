import { Container, Row, Col, Figure } from "react-bootstrap";
// import books from "../data/history.json";
import React from "react";
import AddComments from "./AddComments";
import RetrieveComments from "./RetrieveComments";

class LatestRelease extends React.Component {
  state = {
    books: [],
    selectedBook: {},
  };

  componentDidMount = async () => {
    console.log("THIS IS COMPONENTDIDMOUNT");

    // this.setState({
    //   isLoading: true,
    // });

    try {
      const response = await fetch(`http://localhost:3001/books`);
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ books: data });
        // console.log(this.state.books);
      } else {
        console.log(" we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <Container>
        <h3>Latest Releases</h3>
        <br />
        <Row>
          <Col xs={8} md={10}>
            <Row>
              {this.state.books.map((book) => (
                <Col xs={12} md={4} lg={2}>
                  <Figure key={book.asin} onClick={() => this.setState({ selectedBook: book })}>
                    <Figure.Image width={150} alt={book.title} src={book.img} rounded onClick={() => this.props.passingProps.history.push("/details/" + movie.imdbID)} />
                  </Figure>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={4} md={2}>
            <RetrieveComments item={this.state.selectedBook} _id={this.state.selectedBook._id} />
            <AddComments _id={this.state.selectedBook._id} />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LatestRelease;
