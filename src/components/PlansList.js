import React from "react";
import { Link } from "react-router-dom";
import HomeCard from './Plans/HomeCard';

const PlansList = ({ plans }) => {
  return (
    <div>
      {plans &&
        plans.map((plans) => {
          return (
            <>
              <div className="container"  >
                <Link to={"/" + plans.id}>
                  <HomeCard plans={plans} />
                </Link>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default PlansList;
