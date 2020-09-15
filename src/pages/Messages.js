import React from "react";

// import Twilil from 'twilio...'

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';

// bootstrap
import Card from "react-bootstrap/Card";


const Message = (props) => {
  return (
    <div className=" container card-container">
      <Card className="mx-1 border" style={{height: '100%'}}>
      <Card.Header className="text-center" style={{color: '#b5700b', fontFamily: 'Graduate'}}>MESSAGE</Card.Header>
        <div className="card-container card-flex d-flex justify-content-around">
          <p>Please type your message</p>
          <p> SEND</p>
          <FontAwesomeIcon icon={faCaretRight} size="lg"/>
        </div>
      </Card>
    </div>
  );
};

export default Message;
