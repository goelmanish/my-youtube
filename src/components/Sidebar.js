import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggle = useSelector((store) => store.app.isMenuOpen);
  if(!toggle) return null;
  return (
    <div className="bg-white shadow-lg p-5 col-span-10">
      <ul className="">
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
        <li></li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul className="">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movie</li>
        <li></li>
      </ul>
      <h1 className="font-bold pt-5">Favourits</h1>
      <ul className="">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Like Videos</li>
        <li></li>
      </ul>
    </div>
  );
};

export default Sidebar;
