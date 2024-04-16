import { Menu, Radio } from 'antd';
import React from 'react';
import './popoverSettingWorkSpace.scss';
import IconEdit from '../../Icon/IconEdit';
import IconChange from '../../Icon/IconChange';
import IconSetting from '../../Icon/IconSetting';
import IconSaveAs from '../../Icon/IconSaveAs';
import IconDelete from '../../Icon/IconDelete';
import IconPlus from '../../Icon/IconPlus';
import IconBrowse from '../../Icon/IconBrowse';
import IconCollapse from '../../Icon/IconCollapse';
import IconCycle from '../../Icon/IconCycle';
import IconLogoMonday from '../../Icon/IconLogoMonday';
import IconArchive from '../../Icon/IconArchive';
import IconCheck from '../../Icon/IconCheck';

const arrColorSelect = [
  { color: '#1d1f39' },
  { color: '#2e4f8c' },
  { color: '#3171e2' },
  { color: '#377d50' },
  { color: '#3b74bc' },
  { color: '#4498f7' },
  { color: '#595acd' },
  { color: '#5bc77a' },
  { color: '#6799f5' },
  { color: '#808080' },
  { color: '#80cafa' },
  { color: '#995cca' },
  { color: '#a8d14b' },
  { color: '#ac3e55' },
  { color: '#d1505f' },
  { color: '#e4697e' },
  { color: '#e74060' },
  { color: '#ea3989' },
  { color: '#ec66c0' },
  { color: '#ed6e40' },
  { color: '#f1af54' },
  { color: '#f7cd45' },
  { color: '#ffffff' },
];

const PopoverSettingWorkSpace = () => {
  const arrSettingWorkSpace = [
    {
      label: 'work management overview',
      icon: <IconLogoMonday />,
    },
    {
      type: 'divider',
    },
    {
      label: 'Rename workspace',
      icon: <IconEdit />,
    },
    {
      label: 'Change icon',
      icon: <IconChange />,
      key: '1',
      children: [
        {
          label: (
            <div>
              <p>Background color</p>
              <Radio.Group
                // defaultValue={['#1d1f39']}
                // value={'#1d1f39'}
                className="radio_group_color"
                options={arrColorSelect.map((item, index) => {
                  return {
                    label: (
                      <div className="relative">
                        <div
                          className="w-6 h-6 rounded-full p-0.5 flex items-center justify-center"
                          style={{
                            border: `1px solid ${item.color}`,
                          }}
                        ></div>
                        <div
                          className="w-4 h-4 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="icon_check">
                          <IconCheck />
                        </span>
                      </div>
                    ),
                    value: item.color,
                  };
                })}
              ></Radio.Group>
            </div>
          ),
        },
      ],
    },
    {
      label: 'Manage workspace',
      icon: <IconSetting />,
    },
    {
      label: 'Save as template',
      icon: <IconSaveAs />,
      disabled: true,
    },
    {
      label: 'Delete workspace',
      icon: <IconDelete />,
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      label: 'Add new workspace',
      icon: <IconPlus />,
    },
    {
      label: 'Browse all workspaces',
      icon: <IconBrowse />,
    },
    {
      type: 'divider',
    },
    {
      label: 'Collapse all folders',
      icon: <IconCollapse />,
    },
    {
      type: 'divider',
    },
    {
      label: 'View archive/trash',
      icon: <IconCycle />,
      children: [
        {
          label: 'Archive',
          icon: <IconArchive />,
        },
        {
          label: 'Trash',
          icon: <IconDelete />,
        },
      ],
    },
  ];
  return (
    <div className="popover_setting_workspace">
      <Menu
        defaultOpenKeys={['1']}
        mode="vertical"
        items={arrSettingWorkSpace}
      />
    </div>
  );
};

export default PopoverSettingWorkSpace;
