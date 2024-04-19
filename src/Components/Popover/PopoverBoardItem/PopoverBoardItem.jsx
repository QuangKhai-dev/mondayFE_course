import React from 'react';
import IconOpenNew from '../../Icon/IconOpenNew';
import IconArrowNext from '../../Icon/IconArrowNext';
import IconCheckBox from '../../Icon/IconCheckBox';
import IconBrowse from '../../Icon/IconBrowse';
import IconChange from '../../Icon/IconChange';
import IconStar from '../../Icon/IconStar';
import IconDuplicate from '../../Icon/IconDuplicate';
import IconSaveAs from '../../Icon/IconSaveAs';
import IconDelete from '../../Icon/IconDelete';
import IconArchive from '../../Icon/IconArchive';
import IconEdit from '../../Icon/IconEdit';
import { Menu } from 'antd';
import './popoverBoardItem.scss';
const PopoverBoardItem = () => {
  const arrSettingWorkSpace = [
    {
      label: 'Open Board in New Tab',
      icon: <IconOpenNew />,
      key: 'a',
    },
    {
      type: 'divider',
    },
    {
      label: 'Rename Board',
      icon: <IconEdit />,
    },
    {
      label: 'Move to',
      icon: <IconArrowNext />,
      key: '1',
      children: [
        {
          label: 'Move to folder',
          icon: <IconCheckBox />,
        },
        {
          label: 'Move to workspace',
          icon: <IconBrowse />,
        },
      ],
    },
    {
      label: 'Change Board type',
      icon: <IconChange />,
    },
    {
      label: 'Add to favorites',
      icon: <IconStar />,
    },
    {
      label: 'Duplicate Board',
      icon: <IconDuplicate />,
    },

    {
      label: 'Save as template',
      icon: <IconSaveAs />,
    },
    {
      label: 'Archive',
      icon: <IconArchive />,
    },
    {
      label: 'Trash',
      icon: <IconDelete />,
    },
  ];
  return (
    <div className="popover_board_item">
      <Menu openKeys={['a']} mode="vertical" items={arrSettingWorkSpace} />
    </div>
  );
};

export default PopoverBoardItem;
