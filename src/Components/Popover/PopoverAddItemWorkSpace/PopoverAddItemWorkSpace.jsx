import { Menu } from 'antd';
import React from 'react';
import IconProject from '../../Icon/IconProject';
import IconPortfolio from '../../Icon/IconPortfolio';
import IconBoard from '../../Icon/IconBoard';
import IconDocument from '../../Icon/IconDocument';
import './popoverAddItemWorkSpace.scss';
import IconDashBoard from '../../Icon/IconDashBoard';
import IconChooseTemplate from '../../Icon/IconChooseTemplate';
import IconDowload from '../../Icon/IconDowload';
import IconForm from '../../Icon/IconForm';
import IconApp from '../../Icon/IconApp';
import IconCheckBox from '../../Icon/IconCheckBox';
import logoExcel from './../../../assets/imgIcon/excel.png';
import logoAsana from './../../../assets/imgIcon/asana.png';
import logoBasecamp from './../../../assets/imgIcon/basecamp.png';
import logoFacebookads from './../../../assets/imgIcon/facebookads.png';
import logoSheets from './../../../assets/imgIcon/sheets.png';
import logoTrello from './../../../assets/imgIcon/trello.png';
import logoZendesk from './../../../assets/imgIcon/zendesk.png';
import logoJira from './../../../assets/imgIcon/jira.png';
const PopoverAddItemWorkSpace = () => {
  const arrSettingWorkSpace = [
    {
      label: 'Project Management',
      type: 'group',
      children: [
        {
          label: 'New Project',
          icon: <IconProject />,
        },
        {
          label: 'New Portfolio',
          icon: <IconPortfolio />,
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      label: 'New Board',
      icon: <IconBoard size="16" />,
    },
    {
      label: 'New Doc',
      icon: <IconDocument />,
    },
    {
      label: 'New Dashboard',
      icon: <IconDashBoard />,
    },
    {
      label: 'Choose from template',
      icon: <IconChooseTemplate />,
    },
    {
      label: 'Import Data',
      icon: <IconDowload />,
      key: 'a',
      children: [
        {
          label: 'Excel/CSV',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoExcel} alt="" />
            </span>
          ),
        },
        {
          label: 'Google Sheets',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoSheets} alt="" />
            </span>
          ),
        },
        {
          label: 'Asana',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoAsana} alt="" />
            </span>
          ),
        },
        {
          label: 'Trello',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoTrello} alt="" />
            </span>
          ),
        },
        {
          label: 'Basecamp',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoBasecamp} alt="" />
            </span>
          ),
        },
        {
          label: 'Facebook Ads',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoFacebookads} alt="" />
            </span>
          ),
        },
        {
          label: 'Zendesk',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoZendesk} alt="" />
            </span>
          ),
        },
        {
          label: 'jira',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoJira} alt="" />
            </span>
          ),
        },
        {
          label: 'jira server',
          icon: (
            <span>
              <img className="w-5 h-5" src={logoJira} alt="" />
            </span>
          ),
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      label: 'Apps',
      icon: <IconApp />,
    },
    {
      label: 'New From',
      icon: <IconForm />,
    },
    {
      type: 'divider',
    },
    {
      label: 'New folder',
      icon: <IconCheckBox />,
    },
  ];
  return (
    <div className="popover_add_item_workspace">
      <Menu mode="vertical" items={arrSettingWorkSpace} />
    </div>
  );
};

export default PopoverAddItemWorkSpace;
