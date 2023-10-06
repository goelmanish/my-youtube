import React from 'react';
import Sidebar from './Sidebar';
import Maincontainer  from './Maincontainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="pt-[85px] flex">
     <Sidebar/>
     <Outlet/>
    </div>
  )
}

export default Body
