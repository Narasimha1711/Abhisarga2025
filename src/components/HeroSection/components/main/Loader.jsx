import React from "react";

const Loader = () => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
      <h2 className="text-white mt-4">Loading...</h2>
      <p className="text-zinc-400">
        Your adventure is about to begin
      </p>
    </div>
  );
};

export default Loader;
