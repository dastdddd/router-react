import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <div className="grid-header">
      <ul>
          <li><Link to="/green">Green</Link></li>
          <li><Link to="/red">Red</Link></li>
          <li><Link to="/blue">Blue</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;