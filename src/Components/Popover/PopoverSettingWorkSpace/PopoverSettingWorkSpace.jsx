import { Menu } from 'antd';
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
      children: [
        {
          label: 'hello',
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
      <Menu mode="vertical" items={arrSettingWorkSpace} />
    </div>
  );
};

export default PopoverSettingWorkSpace;
