import React from 'react';
// import { render } from '@testing-library/react';
import Card from 'react-bootstrap/Card';

class PlanCard extends React.Component {
  render() {
    return (
      <Card className="mx-1 border-0">
        <Card.Img variant="top"
          className="border-0 rounded"
          src={this.props.image} />
        <Card.Body>
          <Card.Title>
            {this.props.title}
          </Card.Title>
          <Card.Text className="">
            {this.props.summary}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default PlanCard;
