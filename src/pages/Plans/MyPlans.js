import React from "react";
import { Card, CardHeader, CardBody } from "reactstrap";

import { BsArrow90DegLeft } from "react-icons/bs";
import PlanCard from "../../components/Plans/PlanCard";

class MyPlans extends React.Component {
  render() {
    return (
      <>
        <div className=" container card-container mt-lg-5 pt-lg-5 mb-3">
          <Card
            className="mx-1 shadow rounded  border"
            style={{ height: "100vh" }}
          >
            <CardHeader className="d-flex justify-content-start mt-3">
              <BsArrow90DegLeft style={{ color: "#9E7E38" }} />
              <h6 style={{ fontFamily: "Graduate", color: "black" }}>
                MY PLANS
              </h6>
            </CardHeader>
            <CardBody>
              <div className="container">
                <div className="row">
                  <div>
                    <PlanCard />
                  </div>
                  <div>
                    <PlanCard />
                  </div>
                  <div>
                    <PlanCard />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default MyPlans;
