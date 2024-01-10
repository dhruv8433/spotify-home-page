import React from "react";
import NavComponent1 from "./NavComponent1";
import NavComponent2 from "./NavComponent2";

const PrimaryNavbar = () => {
  return (
    <div className="fixed max-w-full w-[25%]">
      <NavComponent1 />
      <NavComponent2 />
    </div>
  );
};

export default PrimaryNavbar;
