import React from "react";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";
import HomeCard from './Plans/HomeCard';

const PlansList = ({ plans }) => {
  return (
    <div>
      {plans &&
        plans.map((plans) => {
          return (
            <>
              <div className="container"  >
                <Link to={"/plan" + plans.id} key={plans.id} >
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
