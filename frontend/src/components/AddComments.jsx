import { ListGroup, FormControl, Button, Card, Form } from "react-bootstrap";
import React from "react";
import books from "../data/history.json";

class AddComments extends React.Component {
  state = {
    comments: {
      comment: "",
      rate: "",
      elementId: this.props.asin,
    },
  };

  commentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/books/${this.props._id}/comments/`, {
        method: "POST",
        body: JSON.stringify(this.state.comments),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        alert("comment added successfully");
        this.setState({
          comments: {
            comment: "",
            rate: "",
          },
        });
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      // props.item is the whole object
      <Form onSubmit={this.commentSubmit}>
        <Form.Group>
          <Form.Label>Add a comment</Form.Label>
          <Form.Control
            id="comment"
            value={this.state.comments.comment}
            onChange={(e) =>
              this.setState({
                comments: {
                  ...this.state.comments,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rate the book</Form.Label>
          <FormControl
            id="rate"
            as="select"
            value={this.state.comments.rate}
            placeholder="rating"
            onChange={(e) =>
              this.setState({
                commentsAdded: {
                  ...this.state.comments,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </FormControl>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComments;
