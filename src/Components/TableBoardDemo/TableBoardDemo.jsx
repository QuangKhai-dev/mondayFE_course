import { Table } from 'antd';
import React from 'react';
import './tableBoardDemo.scss';
const TableBoardDemo = ({ className, arrColumn }) => {
  let shapeObject = 'bg-gray-300 w-full h-1 rounded-md';
  const columnTable = arrColumn.map((item, index) => {
    return {
      title: item,
      dataIndex: item.toLowerCase(),
      render: () => {},
    };
  });
  columnTable.unshift({
    title: 'Task',
    dataIndex: 'task',
    width: '170px',
  });
  let columns = [
    {
      title: 'Task',
      dataIndex: 'task',
      width: '170px',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
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
        columns={columnTable}
        dataSource={data}
      />
    </div>
  );
};

export default TableBoardDemo;
