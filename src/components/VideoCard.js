import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
 console.log(info);
  const { snippet, statistics, id } = info;
  const { thumbnails, title } = snippet;
  console.log(thumbnails?.medium?.url);
  return (
    <div className="shadow-lg p-2 m-2 w-72 rounded-lg">
      <Link to={"/watch?v=" + id}>
        <img className="rounded-lg" alt={title} src={thumbnails?.medium?.url} />
        <h1 className="font-bold">{title}</h1>
      </Link>
    </div>
  );
};

export default VideoCard;
