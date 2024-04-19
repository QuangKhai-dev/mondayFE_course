import { Popover, Tooltip } from 'antd';
import React from 'react';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const InputFilter = ({ className, popoverContent }) => {
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
        <Popover
          content={popoverContent}
          placement="rightTop"
          trigger="click"
          arrow={false}
        >
          <Tooltip placement="top" title="Filters">
            <button className="opacity-0 group-hover:opacity-100">
              <i className="fa-solid fa-filter"></i>
            </button>
          </Tooltip>
        </Popover>
      </div>
    </div>
  );
};

export default InputFilter;
