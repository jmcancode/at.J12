import React from "react";

// bootstrap
import Card from "react-bootstrap/Card";


const Message = (props) => {
  return (
    <div className=" container card-container">
      <Card className="mx-1 shadow rounded  border" style={{height: '100%'}}>
      <Card.Header className="text-center" style={{color: '#b5700b', fontFamily: 'Graduate'}}>JOURNAL</Card.Header>
        <Card.Body>
        <Card.Text className="text-center">
        JOURNAL PAGE 
        </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Message;
