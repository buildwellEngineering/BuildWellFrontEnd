import React from 'react';
import './styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="crane">
        <div className="cable"></div>
        <div className="block"></div>
      </div>
    </div>
  );
};

export default Loader;
