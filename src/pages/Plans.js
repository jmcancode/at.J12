import React from 'react';
import '../pages/Home.css';
import PlanCategory from '../components/Plans/PlanCategory';
import PlanHeader from '../components/Plans/PlanHeader';
import Container from 'react-bootstrap/Container';

const Plans = (props) => {
  return (
    <Container>
      <div className="shadow rounded mx-3 mt-2 mb-5 pr-3 pb-3 pl-3">
        <PlanHeader />
        <PlanCategory category="Wellness Techniques" />
        <PlanCategory category="Male Athletes" />
        <PlanCategory category="Female Athletes" />
        <PlanCategory category="Power in Rest" />

      </div>
    </Container>
  );
};

export default Plans;
