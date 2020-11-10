import React from "react";
import { FaFilter, FaInbox } from "react-icons/fa";
import {Link} from "react-router-dom";

class CategoryHeader extends React.Component {
  render() {
    return (
      <div className="container d-flex justify-content-between inline pt-2">
        <div className="pt-2">
          <FaFilter style={{ color: "#9E7E38" }} />
          <small className="pl-1">Filter</small>
        </div>
        <div className="pl-3">
          <header
            style={{
              fontFamily: "Graduate",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Plans
          </header>
        </div>
        <div className="pt-2">
          <Link to={"/watchlater"}><FaInbox style={{ color: "#9E7E38" }} /> </Link>
          <small className="pl-1">My Plans</small>
        </div>
      </div>
    );
  }
}

export default CategoryHeader;
