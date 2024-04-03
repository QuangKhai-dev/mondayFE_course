import React from 'react';
import { Layout } from 'antd';
import './sideBar.scss';
import { NavLink } from 'react-router-dom';
const { Sider } = Layout;
const SideBar = ({ collapsed, setCollapsed }) => {
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
      <div>
        <ul>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>My Work</NavLink>
          </li>
        </ul>
      </div>
      {/* workspace board  */}
      <div></div>
    </Sider>
  );
};

export default SideBar;
