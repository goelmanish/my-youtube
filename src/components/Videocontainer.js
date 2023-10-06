import React, { useEffect, useState } from "react";
import { YOU_TUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const Videocontainer = () => {
  const getVideos = async () => {
    const data = await fetch(YOU_TUBE_API);
    const videos = await data.json();
    // console.log(videos);
    setVideo(videos.items);
  };

  const [video, setVideo] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  if (video?.length <= 0) return null;
  return (
    <div className="flex flex-wrap">
      
      {video.map((vid) => {
        return <VideoCard key={vid.id} info={vid} />;
      })}
    </div>
  );
};

export default Videocontainer;
