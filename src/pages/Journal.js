import React, { Component } from "react";
//reactstrap
import { Card, CardText, ListGroup, ListGroupItem } from "reactstrap";
// Axios
import Axios from "axios";

class Journal extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <Card className="mb-2 b-0" key={post.id}>
            <ListGroup>
              <ListGroupItem>
                <CardText>{post.body}</CardText>
              </ListGroupItem>
            </ListGroup>
          </Card>
        );
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="text-center">Journal</h4>
          {postList}
        </div>
      </div>
    );
  }
}

export default Journal;
