import { Popover } from 'antd';
import React from 'react';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const InputFilter = ({ className }) => {
  return (
    <div
      className={`flex items-center px-2 py-1 space-x-2 border border-gray-200 rounded justify-between group focus:bg-blue-500 ${className}`}
    >
      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div>
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div>
        <Popover content={content} title="Title" trigger="click">
          <button className="opacity-0 group-hover:opacity-100">
            <i className="fa-solid fa-filter"></i>
          </button>
        </Popover>
      </div>
    </div>
  );
};

export default InputFilter;
