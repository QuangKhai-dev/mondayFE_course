import { Checkbox, Menu } from 'antd';
import React, { Children } from 'react';
import './popoverFilter.scss';
const PopoverFilter = () => {
  const arrCheckBoxFilterBy = [
    {
      label: 'Main',
      value: 'main',
    },
    {
      label: 'Private',
      value: 'private',
    },
    {
      label: 'Shareable',
      value: 'shareable',
    },
  ];
  const arrCheckBox2 = [
    {
      label: 'Subscribed or owner',
      value: 'Subscribed or owner',
    },
    {
      label: 'Owner only',
      value: 'Owner only',
    },
  ];
  const arrCheckBox3 = [
    {
      label: 'Dashboards only',
      value: 'Dashboards only',
    },
  ];
  const arrSettingWorkSpace = [
    {
      label: (
        <div>
          <p className="mb-2">Filter by</p>
          <Checkbox.Group options={arrCheckBoxFilterBy} />
        </div>
      ),
      type: 'group',
    },
    {
      type: 'divider',
    },
    {
      type: 'group',
      label: (
        <div>
          <Checkbox.Group options={arrCheckBox2} />
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      type: 'group',
      label: (
        <div>
          <Checkbox.Group options={arrCheckBox3} />
        </div>
      ),
    },
  ];
  return (
    <div className="popover_filter">
      <Menu
        defaultOpenKeys={['1', 'a']}
        mode="vertical"
        items={arrSettingWorkSpace}
      />
    </div>
  );
};

export default PopoverFilter;
