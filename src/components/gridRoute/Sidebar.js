import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GreenSide from './SidebarLink/GreenSide';
import RedSide from './SidebarLink/RedSide';
import BlueSide from './SidebarLink/BlueSide';

const Sidebar = () => {
  return (
    <div className='grid-sidebar'>
      <Routes>
        <Route path='/green' element={<GreenSide />} />
        <Route path='/red' element={<RedSide />} />
        <Route path='/blue' element={<BlueSide />} />
      </Routes>
    </div>

  );
};

export default Sidebar;