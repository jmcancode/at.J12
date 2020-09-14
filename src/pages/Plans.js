import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// custom ccss
import '../pages/Home.css';
// compoentes 
// import PlanCategory from '../components/Plans/PlanCategory';
import PlanHeader from '../components/Plans/PlanHeader';

const Plans = (props) => {
  return (
    <Container className="shadow rounded">
    <Card>
      {<PlanHeader />}
      {/* <h1>Plans Page</h1> */}
      {/* <PlanCategory /> */}
    </Card>
    </Container>
  );
};

export default Plans;
