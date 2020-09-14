import React from 'react';
import './PlanHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const PlanHeader = () => {
  return (
    <div className="d-flex align-content-center justify-content-between header-container mx-2">
      <div className="d-flex align-items-center mr-4">
        <div className="mr-2">
          <FontAwesomeIcon icon={faSlidersH} color="#BF5700" />
        </div>
        <p className="mb-0">Filter</p>
      </div>

      <h4 className="my-auto">PLANS</h4>

      <div className="d-flex align-items-center">
        <div className="mr-2">
          <FontAwesomeIcon icon={faFileAlt} color="#BF5700" />
        </div>
        <p className="mb-0">My Plans</p>
      </div>
    </div>
  );
};

export default PlanHeader;
