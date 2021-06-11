import React from "react";
import { ListGroup, Card, FormControl, Button } from "react-bootstrap";

class RetrieveComments extends React.Component {
  state = {
    items: [],
    _id: "",
    isLoading: false,
    isError: false,
  };

  componentDidMount = async () => {
    console.log("THIS IS COMPONENTDIDMOUNT");
    this.fetchComments();
  };

  fetchComments = async () => {
    this.setState({
      isLoading: true,
      
      // _id: this.props._id,
    });

    try {
      const response = await fetch(`http://localhost:3001/books/${this.props._id}/comments`);
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ items: data.comments, _id: data._id,  isError: false, isLoading: false });
      } else {
        console.log(" we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  componentDidUpdate = (prevProps) => {
    prevProps.asin !== this.props.asin && this.fetchComments();
  };

  deleteComment = async () => {
    try {
      const response = await fetch(`http://localhost:3001/books/${this.props._id}/comments/${this.props.commentId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Something went wrong");

      alert("Event deleted successfully");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  render() {
    return (
      <div>
        <h6>Comments </h6>
        {
          <Card style={{ width: "15rem" }}>
            <ListGroup key={this.props.item.asin}>
              <ListGroup.Item>
                <img width={150} src={this.props.item.img} alt={this.props.item.title} />
              </ListGroup.Item>
              
            {this.state.items.map((itm) => (
               <div>
                <ListGroup.Item key={itm._id}>  
              {this.props.item.comments.map}          
                <Button className="mr-5" onClick={this.deleteComment} variant="danger" type="submit">
                    Del
                  </Button> 
                  </ListGroup.Item>                  
              </div>
              ))} 
            </ListGroup>
          </Card>
        }
      </div>
    );
  }
}
export default RetrieveComments;
