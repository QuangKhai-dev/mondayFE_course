import { Table } from 'antd';
import React from 'react';
import './tableBoardDemo.scss';
const TableBoardDemo = ({ className }) => {
  let shapeObject = 'bg-gray-300 w-full h-1 rounded-md';
  let columns = [
    {
      title: 'Task',
      dataIndex: 'task',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
    },
  ];
  const data = [
    {
      task: 'Task 1',
      owner: 'Khải',
    },
    {
      task: 'Task 2',
      owner: 'Khải',
    },
    {
      task: 'Task 3',
      owner: 'Khải',
    },
  ];
  return (
    <div className="board_demo_table">
      <Table
        className={className}
        pagination={false}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default TableBoardDemo;
