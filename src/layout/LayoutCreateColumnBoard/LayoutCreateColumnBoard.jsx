import { Checkbox } from 'antd';
import React from 'react';
import IconStatus from '../../Components/Icon/IconStatus';
import IconOwner from '../../Components/Icon/IconOwner';
import IconUplan from '../../Components/Icon/IconUplan';
import IconEpic from '../../Components/Icon/IconEpic';
import IconEstimated from '../../Components/Icon/IconEstimated';
import IconId from '../../Components/Icon/IconId';
import './layoutCreateColumnBoard.scss';
const LayoutCreateColumnBoard = ({ handleChangeArrColumn }) => {
  const options = [
    {
      label: (
        <div>
          <IconStatus />
          <span>Status</span>
        </div>
      ),
      value: 'Status',
      disabled: true,
    },
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
          <IconUplan />
          <span>Unplanned?</span>
        </div>
      ),
      value: 'Unplanned?',
    },
    {
      label: (
        <div>
          <IconEpic />
          <span>Epics</span>
        </div>
      ),
      value: 'Epics',
    },
    {
      label: (
        <div>
          <IconEstimated />
          <span>Estimated SP</span>
        </div>
      ),
      value: 'Estimated SP',
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
          <IconId />
          <span>Item ID</span>
        </div>
      ),
      value: 'Item ID',
    },
    {
      label: (
        <div>
          <IconStatus />
          <span>Type</span>
        </div>
      ),
      value: 'Type',
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
          defaultValue={['Status']}
          options={options}
        />
      </div>
    </div>
  );
};

export default LayoutCreateColumnBoard;
