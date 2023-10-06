import React from "react";
import { Link } from "react-router-dom";

const WatchVideo = ({ info }) => {
 // console.log('info value'+info);
  
 
  return (
    <div className="shadow-lg p-2 m-2 w-72 rounded-lg">
      {/* <Link to={"/watch?v=" + id}>
        <img className="rounded-lg" alt={title} src={thumbnails?.medium?.url} />
        <h1 className="font-bold">{title}</h1>
      </Link> */}
       <img className="rounded-lg" alt={info} src={'https://i.ytimg.com/vi/'+info+'/mqdefault.jpg'} />
      <h1>{info}</h1>
    </div>
  );
};

export default WatchVideo;
