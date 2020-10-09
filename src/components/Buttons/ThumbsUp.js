import React from "react";

import "./LikeButton.css";

class ThumbsUp extends React.Component {
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
              <i className="far fa-thumbs-up fa-2x" style={{ color: "#000000" }}> </i> 
            </button>
          </div>
        );
      }
      if (likes === 1) {
        return (
          <div>
            <button className="button" onClick={this.addLike}>
              <i className="fas fa-thumbs-up fa-2x" style={{ color: "green" }}> </i>
              {likes} 
            </button>
          </div>
        );
      }
      if (likes > 1) {
        return (
          <div>
            <button className="button" onClick={this.addLike}>
              <i className="fas fa-thumbs-up fa-2x" style={{ color: "green" }}> </i> 

              {likes}
            </button>
          </div>
        );
      }
    }
  }

  export default ThumbsUp;