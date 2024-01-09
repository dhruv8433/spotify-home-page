import React from "react";

const PlaylistCard = ({ title, desc, btn }) => {
  return (
    <div className="p-3 highlighted my-4 rounded-md">
      <h1 className="font-semibold text-md my-1">{title}</h1>
      <h1 className="font-semibold text-sm my-1">{desc}</h1>
      <button className="py-1 px-4 bg-white font-semibold text-md text-black rounded-2xl my-4 hover:text-lg">
        {btn}
      </button>
    </div>
  );
};

export default PlaylistCard;
