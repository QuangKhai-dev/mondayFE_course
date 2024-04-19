import React, { useState } from 'react';
import IconBoard from '../Icon/IconBoard';
import { Popover } from 'antd';
import PopoverBoardItem from '../Popover/PopoverBoardItem/PopoverBoardItem';

const BoardItem = () => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="flex items-center justify-between py-2 px-3 bg-blue-200 rounded space-x-2 group"
      onContextMenu={event => {
        event.preventDefault();
        setActive(!active);
      }}
      onBlur={() => {
        setActive(false);
      }}
      tabIndex={-1}
    >
      <div>
        <IconBoard />
      </div>
      <div className="flex-1">
        <span>My First Project</span>
      </div>
      <div>
        <Popover
          open={active}
          content={<PopoverBoardItem />}
          trigger={['click']}
          placement="bottomRight"
          arrow={false}
        >
          <button
            onClick={() => {
              setActive(!active);
            }}
            className="py-1 px-2 bg-gray-300 rounded opacity-0 group-hover:opacity-100"
          >
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </Popover>
      </div>
    </div>
  );
};

export default BoardItem;
