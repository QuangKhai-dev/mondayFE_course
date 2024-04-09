import { Checkbox } from 'antd';
import React from 'react';
import IconStatus from '../../Components/Icon/IconStatus';
import IconOwner from '../../Components/Icon/IconOwner';
import IconUplan from '../../Components/Icon/IconUplan';
import IconEpic from '../../Components/Icon/IconEpic';
import IconEstimated from '../../Components/Icon/IconEstimated';
import IconId from '../../Components/Icon/IconId';
import './layoutCreateColumnBoard.scss';
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
          <IconStatus />
          <span>Due Date</span>
        </div>
      ),
      value: 'Due Date',
      // disabled: true,
    },
    {
      label: (
        <div>
          <IconStatus />
          <span>Budget</span>
        </div>
      ),
      value: 'Budget',
      // disabled: true,
    },
    {
      label: (
        <div>
          <IconStatus />
          <span>Priority</span>
        </div>
      ),
      value: 'Priority',
    },
    {
      label: (
        <div>
          <IconStatus />
          <span>Last updated</span>
        </div>
      ),
      value: 'Last updated',
    },
    {
      label: (
        <div>
          <IconStatus />
          <span>Files</span>
        </div>
      ),
      value: 'Files',
    },
    {
      label: (
        <div>
          <IconStatus />
          <span>Notes</span>
        </div>
      ),
      value: 'Notes',
    },
    {
      label: (
        <div>
          <IconStatus />
          <span>Time line</span>
        </div>
      ),
      value: 'Time line',
    },
  ];
  return (
    <div className="layout_create_column">
      <h1 className="text-2xl text-title mb-3">
        Want to add some of these columns to your tasks board?
      </h1>
      <p className="text-sm text-[#676879]">
        💡 See info at a glance with these essential columns. You can add or
        remove columns later. The status column is required.
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
