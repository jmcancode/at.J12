import React from 'react';
import Container from 'react-bootstrap/Container';
import '../pages/Home.css';
import PlanCategory from '../components/Plans/PlanCategory';
import PlanHeader from '../components/Plans/PlanHeader';

const Plans = (props) => {
  return (
    <Container className="shadow rounded">
      <PlanHeader />
      {/* <h1>Plans Page</h1> */}
      <PlanCategory />
    </Container>
  );
};

export default Plans;
