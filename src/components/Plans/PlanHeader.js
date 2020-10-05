import React from 'react';
import './PlanHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

const PlanHeader = () => {
  return (
    <div className="d-flex align-content-center justify-content-between header-container mx-2">
      <div className="d-flex align-items-center">
        <div className="mr-2">
          <FontAwesomeIcon icon={faSlidersH} color="#BF5700" />
        </div>
        <p className="mb-0">Filter</p>
      </div>

      <h4 className="mx-auto my-auto pr-5 font-weight-bold">DISCOVER</h4>
    </div>
  );
};

export default PlanHeader;
