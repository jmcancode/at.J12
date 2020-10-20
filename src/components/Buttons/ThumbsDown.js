import React from "react";
import "./LikeButton.css";

class ThumbsDown extends React.Component {
  state = {
    likes: 0,
  };

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
    });
  };

  render() {
    const likes = this.state.likes;
    if (likes === 0) {
      return (
        <div>
          <i
            onClick={this.addLike}
            className="far fa-thumbs-down fa-lg"
            style={{ color: "#000000" }}
          >
            {" "}
          </i>
        </div>
      );
    }
    if (likes === 1) {
      return (
        <div>
          <i
            onClick={this.addLike}
            className="fas fa-thumbs-down fa-lg"
            style={{ color: "black" }}
          >
            {" "}
          </i>
          {likes}
        </div>
      );
    }
    if (likes > 1) {
      return (
        <div>
          <i
            onClick={this.addLike}
            className="fas fa-thumbs-down fa-lg"
            style={{ color: "black" }}
          >

          </i>
          {likes}
        </div>
      );
    }
  }
}

export default ThumbsDown;
