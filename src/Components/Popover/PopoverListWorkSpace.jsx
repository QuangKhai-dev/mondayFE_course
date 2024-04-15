import React from 'react';
import { Avatar, Popover } from 'antd';
import InputSearch from '../Input/InputSearch';
import IconHomeBold from '../Icon/IconHomeBold';
import IconPlus from '../Icon/IconPlus';
import IconBrowse from '../Icon/IconBrowse';
const PopoverListWorkSpace = () => {
  const arrListWorkSpace = [
    {
      name: 'Main WorkSpace',
      default: true,
      color: 'bg-blue-500',
    },
    {
      name: 'WorkSpace Data',
      default: false,
      color: 'bg-pink-500',
    },
  ];
  return (
    <div className="space-y-2 min-w-[280px]">
      {/* input search  */}
      <div>
        <InputSearch />
      </div>
      {/* favorite workspace  */}
      <div>
        <button className="w-full text-left space-x-2 p-2 hover:bg-gray-100 rounded">
          <i class="fa-solid fa-star text-yellow-500"></i>
          <span>Favorites</span>
        </button>
      </div>
      {/* list workspace  */}
      <div>
        <p className="font-light text-content">My workspaces</p>
        {arrListWorkSpace.map((workspace, index) => {
          return (
            <button className="flex flex-1 space-x-2 items-center p-2 hover:bg-gray-100 rounded w-full">
              <div className="relative">
                <Avatar className={workspace.color} shape="square" size={20}>
                  M
                </Avatar>
                {workspace.default && (
                  <span className="absolute -bottom-1 -right-2">
                    <IconHomeBold />
                  </span>
                )}
              </div>
              <div>
                <span className="font-light text-sm">Main workspace</span>
              </div>
            </button>
          );
        })}
      </div>
      {/* create and browse workspace  */}
      <div className="flex justify-between pb-1 pt-3 border-t border-t-gray-300">
        <button className="flex items-center space-x-1 py-1 px-2 hover:bg-gray-200 rounded">
          <IconPlus />
          <span>Add Workspace</span>
        </button>
        <button className="flex items-center space-x-1 py-1 px-2 hover:bg-gray-200 rounded">
          <IconBrowse />
          <span>Browse all</span>
        </button>
      </div>
    </div>
  );
};

export default PopoverListWorkSpace;
