import React from 'react';
import '../pages/Home.css';
import PlanCategory from '../components/Plans/PlanCategory';
import PlanHeader from '../components/Plans/PlanHeader';

const Plans = (props) => {
  return (
    <div className="shadow rounded mx-3 mt-2 mb-3 pr-3 pb-3 pl-3">
      <PlanHeader />
      <PlanCategory />
      <PlanCategory />
      <PlanCategory />
      <PlanCategory />

    </div>
  );
};

export default Plans;
