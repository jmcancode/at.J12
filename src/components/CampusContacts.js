import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const campusContacts = (props) => {
  return (

    <div className="d-flex justify-content-around mt-5">

      <a href={"tel: +1210-896-0348"}
        className="d-flex align-items-center justify-content-center border border-white rounded p-2" >
        <div className="mr-2">
          <FontAwesomeIcon icon={faPhoneAlt} size="sm" />
        </div>
        <h6 className="mb-0">
          Campus <br />
          Emergency
        </h6>
      </a>

      <a href={"tel: +1210-896-0348"}
        className="d-flex align-items-center justify-content-center border border-white rounded p-2">
        <div className="mr-2">
          <FontAwesomeIcon icon={faPhoneAlt} size="sm" />
        </div>
        <h6 className="mb-0">
          Contact my <br />
          Counselor
        </h6>
      </a>

    </div>
  )
}

export default campusContacts;