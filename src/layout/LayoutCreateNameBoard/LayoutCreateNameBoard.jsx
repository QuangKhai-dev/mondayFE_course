import React from 'react';

const LayoutCreateNameBoard = ({ handleStep }) => {
  return (
    <div className="text-title">
      {/* title  */}
      <h1 className="text-2xl mb-5">Let's start working together</h1>
      <p className="text-sm mb-3">
        Give your board a name, e.g. marketing plan, sales pipeline, quarterly
        roadmap...
      </p>
      {/* input  */}
      <div className="px-5 py-2 border border-gray-300 rounded relative hover:border-black duration-500 mb-10">
        <input
          className="focus:outline-none"
          type="text"
          placeholder="My First Board"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 h-3/4 w-7 rounded hover:bg-slate-200">
          X
        </button>
      </div>
      {/* description  */}
      <div className="bg-slate-100 p-5 rounded-md text-[15px]">
        <p>
          In monday.com, "boards" are the place where all your content lives.
        </p>
      </div>
    </div>
  );
};

export default LayoutCreateNameBoard;
