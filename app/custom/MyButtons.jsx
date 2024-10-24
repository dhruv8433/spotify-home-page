import React from "react";

export const CustomIconButton = ({ icon, text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-6 p-4  text-white rounded-full border-white border w-full  ${className}`}
    >
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </button>
  );
};
