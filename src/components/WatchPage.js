import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import WatchList from "./WatchList";
import { addVideo } from "../utils/watchSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
 // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(addVideo(searchParams.get("v")));
    }, []);


  return (
    
    <div className="flex">
      {console.log('render')}
      <div className="p-5 m-5">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <WatchList />
      </div>
    </div>
  );
};

export default WatchPage;
