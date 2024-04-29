import { Radio } from 'antd';
import React, { useState } from 'react';

import './layoutSelectItemManager.scss';
import InputReset from '../../Components/Input/InputReset';
const LayoutSelectItemManager = () => {
  const [optionValue, setOptionValue] = useState('');
  const optionRadio = [
    {
      label: 'Tasks',
      value: 'tasks',
    },
    {
      label: 'Projects',
      value: 'projects',
    },
    {
      label: (
        <div>
          <InputReset
            placeholder={'Custom'}
            value={optionValue}
            handleChange={event => {
              console.log(event.target.value);
              setOptionValue(event.target.value);
            }}
            handleClick={() => {
              setOptionValue('');
            }}
            marginBottom="mb-0"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="layout_select_item_manager">
      <h1 className="text-2xl text-title mb-5">
        Select one of the items you’d like to manage
      </h1>
      <Radio.Group options={optionRadio}></Radio.Group>
      <p className="p-5 rounded-md bg-gray-100 mt-5">
        "Items" are rows in your board which hold all the relevant information
        to your tasks, projects, campaigns and more.
      </p>
    </div>
  );
};

export default LayoutSelectItemManager;
