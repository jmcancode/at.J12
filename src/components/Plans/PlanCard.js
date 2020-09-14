import React from 'react';
import { render } from '@testing-library/react';
import Card from 'react-bootstrap/Card';

class PlanCard extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state.titleName = props.title
  // }


  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>
            {this.props.title}
          </Card.Title>
          <Card.Text>
            {this.props.summary}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default PlanCard;
