import React from "react";

const Loader = () => {
  return (
    <div className="text-center h-screen">
      <span className="justify-center loading loading-infinity loading-lg items-center">
        <h3>Load your data...</h3>
      </span>
    </div>
  );
};

export default Loader;
