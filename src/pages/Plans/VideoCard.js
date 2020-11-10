import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import ReactPlayer from "react-player";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

class VideoCard extends React.Component {
  state = {
    title: "Conquering Machismo",
    content: "Vivamus suscipit tortor eget felis porttitor volutpat.",
  };
  render() {
    return (
      <>
        <Card className="mx-auto border-0" style={{ width: "8rem" }}>
          <Card.Body>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/WoW3NZsSkro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <Card.Title
              className="pt-2"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              <Link style={{ color: "#9E7E38" }} to={"/videoplayer"}>
                {" "}
                {this.state.title}{" "}
              </Link>
            </Card.Title>
            <Card.Text
              className="text-muted"
              style={{ fontSize: "10px", fontWeight: "normal" }}
            >
              {this.state.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    plans: state.firestore.ordered.plans,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "plans", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
  ])
)(VideoCard);

// <Card className="mx-auto border-0" style={{ width: "8rem" }}>
//           <ReactPlayer
//             className="react-player"
//             url="https://youtu.be/EaOx6xH2cy8"
//             width="100%"
//             height="100%"
//           />
//           <Card.Body>
//             <Card.Title style={{ fontSize: "14px", fontWeight: "bold" }}>
//               {this.state.title}
//             </Card.Title>
//             <Card.Text
//               className="text-muted"
//               style={{ fontSize: "10px", fontWeight: "normal" }}
//             >
//               {this.state.content}
//             </Card.Text>
//           </Card.Body>
//         </Card>
