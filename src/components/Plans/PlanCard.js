import React from 'react';
// import { render } from '@testing-library/react';
import Card from 'react-bootstrap/Card';

class PlanCard extends React.Component {
  render() {
    return (
      <Card className="mx-auto border-0" style={{ width: '8rem' }} >
        <Card.Img variant="top"
          className="border-0 mt-0 rounded"
          src={this.props.image} />
        <Card.Body >
          <Card.Title style={{ fontSize: "14px", fontWeight: "bold"}}>
            {this.props.title}
          </Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: "10px", fontWeight: "normal"}}>
            {this.props.summary}
          </Card.Text>
        </Card.Body>
      </ Card>
    )
  }
}

export default PlanCard;
