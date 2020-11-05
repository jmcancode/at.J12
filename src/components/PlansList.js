import React from "react";
import { Link } from "react-router-dom";
import HomeCard from './Plans/HomeCard';

const PlansList = ({ plans, planId }) => {
  return (
    <div>
      {plans &&
        plans.map((plans) => {
          return (
            <>
              <div className="container" key={plans.id}>
                <Link to={"/plan/" + plans.id} key={plans.id} >
                  <HomeCard plans={plans} key={plans.id} />
                </Link>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default PlansList;
