import React from "react";
import HomeCard from "./Plans/HomeCard";

const PlansList = ({ plans }) => {
  return (
    <div>
      {plans &&
        plans.map((plans) => {
          return (
            <>
              <div className="container">
                <HomeCard plans={plans} />
              </div>
            </>
          );
        })}
    </div>
  );
};

export default PlansList;
