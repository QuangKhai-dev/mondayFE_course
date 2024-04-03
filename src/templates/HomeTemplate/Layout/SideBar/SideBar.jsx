import React, { useState } from 'react';
import { Avatar, Button, Layout, Popover } from 'antd';
import './sideBar.scss';
import { NavLink } from 'react-router-dom';
import IconHome from '../../../../Components/Icon/IconHome';
import IconMyWork from '../../../../Components/Icon/IconMyWork';
import IconHomeBold from '../../../../Components/Icon/IconHomeBold';
import InputFilter from '../../../../Components/Input/InputFilter';
import ButtonCustom from '../../../../Components/Button/ButtonCustom';
const { Sider } = Layout;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const SideBar = ({ collapsed, setCollapsed }) => {
  const [activeWorkSpace, setActiveWorkSpace] = useState(false);
  const handleActiveNavlink = ({ isActive }) => {
    let classNormal = 'flex space-x-2 p-2  hover:text-black rounded';
    classNormal += isActive
      ? ' bg-blue-200 hover:bg-blue-200'
      : ' hover:bg-gray-100';

    return classNormal;
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
      style={{
        background: 'white',
        borderTopRightRadius: '8px',
      }}
      width="15%"
      className="side_bar"
      collapsedWidth={30}
    >
      {/* main page & my work  */}
      <div className="p-2 border-b-gray-300 border-b">
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className={handleActiveNavlink}>
              <IconHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/my_work" className={handleActiveNavlink}>
              <IconMyWork />
              <span>My Work</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* workspace board  */}
      <div className="p-2 space-y-2">
        {/* list workspace & action  */}
        <div className="flex space-x-2 justify-between">
          <Popover
            onOpenChange={() => {
              console.log('oke');
              setActiveWorkSpace(!activeWorkSpace);
            }}
            content={content}
            title="Title"
            trigger="click"
          >
            <button className="flex justify-between flex-1 space-x-2 items-center p-2 hover:bg-gray-200 rounded">
              <div className="relative">
                <Avatar shape="square" size={20}>
                  M
                </Avatar>
                <span className="absolute -bottom-1 -right-2">
                  <IconHomeBold />
                </span>
              </div>
              <div>
                <span className="font-medium text-sm">Main workspace</span>
              </div>
              <div className={activeWorkSpace ? 'rotate-180' : ''}>
                <i className="fa-solid fa-angle-up"></i>
              </div>
            </button>
          </Popover>
          <Popover content={content} title="Title" trigger="click">
            <button className="h-10 px-3 hover:bg-gray-200 rounded-md block">
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </Popover>
        </div>
        {/* input filter & button create board  */}
        <div className="flex justify-between space-x-2">
          <InputFilter />
          <ButtonCustom
            className="w-10 px-2"
            content={<i className="fa-solid fa-plus"></i>}
          />
        </div>
      </div>
    </Sider>
  );
};

export default SideBar;
