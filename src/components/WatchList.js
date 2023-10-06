import React from "react";
import { useSelector } from "react-redux";
import WatchVideo from "./WatchVideo";

const WatchList = () => {
  const watchlist = useSelector((store) => store.watch.item);
  console.log('watchlist:'+ watchlist)
  if (watchlist == null) return null;
  return (
    <div className="bg-white shadow-lg p-5 col-span-10">
      <div className="flex flex-wrap">
        {[...watchlist].reverse().map((id,index) => {
          return <WatchVideo key={index} info={id} />;
        })}
      </div>
    </div>
  );
};

export default WatchList;
