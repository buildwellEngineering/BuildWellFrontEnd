import React from 'react';
import './styles/Sidebar.css';

const SideBar = ({ setActiveSection }) => {
  return (
    <div className="offcanvas offcanvas-start" id="demo">
      <div className="offcanvas-header">
        <h1 className="offcanvas-title">Heading</h1>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className="offcanvas-body">
        <p>Some text lorem ipsum.</p>
        <p>Some text lorem ipsum.</p>
        <p>Some text lorem ipsum.</p>
        <button className="btn btn-secondary" type="button">A Button</button>
      </div>
    </div>
  )
};

export default SideBar;
