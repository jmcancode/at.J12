import React from "react";
import "./LikeButton.css";

class ThumbsDown extends React.Component {
    state = {
      likes: 0
    };
  
    addLike = () => {
      let newCount = this.state.likes + 1;
       this.setState({
       likes: newCount
       });
    };
  
    render() {
      const likes = this.state.likes;
      if (likes === 0) {
        return (
          <div>
            <button
              className="button"
              onClick={this.addLike}
            >
              <i className="far fa-thumbs-down fa-2x" style={{ color: "#000000" }}> </i> 
            </button>
          </div>
        );
      }
      if (likes === 1) {
        return (
          <div>
            <button className="button" onClick={this.addLike}>
              <i className="fas fa-thumbs-down fa-2x" style={{ color: "black" }}> </i>
              {likes} 
            </button>
          </div>
        );
      }
      if (likes > 1) {
        return (
          <div>
            <button className="button" onClick={this.addLike}>
              <i className="fas fa-thumbs-down fa-2x" style={{ color: "black" }}> </i> 

              {likes}
            </button>
          </div>
        );
      }
    }
  }

  export default ThumbsDown;