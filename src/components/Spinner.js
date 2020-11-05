import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center ">
        <Spinner animation="border" style={{color: '#b57000'}} />
        </div>
        );
  };

  export default LoadingSpinner;