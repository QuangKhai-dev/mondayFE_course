import { Checkbox } from 'antd';
import React from 'react';
import IconStatus from '../../Components/Icon/IconStatus';
import IconOwner from '../../Components/Icon/IconOwner';
import IconUplan from '../../Components/Icon/IconUplan';
import IconEpic from '../../Components/Icon/IconEpic';
import IconEstimated from '../../Components/Icon/IconEstimated';
import IconId from '../../Components/Icon/IconId';
import './layoutCreateColumnBoard.scss';
import IconCalendar from '../../Components/Icon/IconCalendar';
import IconCalendarBg from '../../Components/Icon/IconCalendarBg';
import IconFileBg from '../../Components/Icon/IconFileBg';
import IconBudgetBg from '../../Components/Icon/IconBudgetBg';
import IconTimeLineBg from '../../Components/Icon/IconTimeLineBg';
import IconPriorityBg from '../../Components/Icon/IconPriorityBg';
import IconNoteBg from '../../Components/Icon/IconNoteBg';
import IconUpdateBg from '../../Components/Icon/IconUpdateBg';
const LayoutCreateColumnBoard = ({ handleChangeArrColumn, arrColumn }) => {
  const options = [
    {
      label: (
        <div>
          <IconOwner />
          <span>Owner</span>
        </div>
      ),
      value: 'Owner',
    },
    {
      label: (
        <div>
          <IconStatus />
          <span>Status</span>
        </div>
      ),
      value: 'Status',
      // disabled: true,
    },
    {
      label: (
        <div>
          <IconCalendarBg />
          <span>Due Date</span>
        </div>
      ),
      value: 'Due Date',
      // disabled: true,
    },

    {
      label: (
        <div>
          <IconFileBg />
          <span>File</span>
        </div>
      ),
      value: 'File',
      // disabled: true,
    },
    {
      label: (
        <div>
          <IconBudgetBg />
          <span>Budget</span>
        </div>
      ),
      value: 'Budget',
    },
    {
      label: (
        <div>
          <IconTimeLineBg />
          <span>Time line</span>
        </div>
      ),
      value: 'Time line',
    },
    {
      label: (
        <div>
          <IconPriorityBg />
          <span>Priority</span>
        </div>
      ),
      value: 'Priority',
    },
    {
      label: (
        <div>
          <IconNoteBg />
          <span>Notes</span>
        </div>
      ),
      value: 'Notes',
    },
    {
      label: (
        <div>
          <IconUpdateBg />
          <span>Last Update</span>
        </div>
      ),
      value: 'Last Update',
    },
  ];
  return (
    <div className="layout_create_column">
      <h1 className="text-2xl text-title mb-3 font-medium">
        Let’s select the relevant columns for your board
      </h1>
      <p className="text-base mb-2 text-[#676879]">
        Choose from the most popular column types for your work
      </p>
      <div>
        <Checkbox.Group
          onChange={handleChangeArrColumn}
          defaultValue={arrColumn}
          options={options}
        />
      </div>
    </div>
  );
};

export default LayoutCreateColumnBoard;
