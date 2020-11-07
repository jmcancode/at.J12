import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Axios from "axios";

class JournalList extends Component {
  state = {
    date: "11/06/20",
    plans: ["Pro Sports", "Wellness", "Gender", "Social Justice"],
    posts: [],
  };
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0, 2)
        });
      })
  }
  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <ListGroup className="pb-2" key={post.id}>
            <ListGroup.Item>
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </ListGroup.Item>
          </ListGroup>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container">
          <h6 className="text-center mt-2 pt-2">Journals</h6>
          {postList}
        </div>
      </div>
    )
  }
}

export default JournalList