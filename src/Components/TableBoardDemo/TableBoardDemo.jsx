import { Table } from 'antd';
import React from 'react';

const TableBoardDemo = ({ data, className }) => {
  let shapeObject = 'bg-gray-300 w-full h-1 rounded-md';
  const columns = [
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'name',
      key: 'name',
      render: () => {
        return <div className={shapeObject}></div>;
      },
    },
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'name',
      key: 'name',
      render: text => {
        return text && <div className={shapeObject}></div>;
      },
    },
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'name',
      key: 'name',
      render: text => {
        return text && <div className={shapeObject}></div>;
      },
    },
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'name',
      key: 'name',
      render: text => {
        return text && <div className={shapeObject}></div>;
      },
    },
    {
      title: (
        <div>
          <i className="fa-solid fa-plus"></i>
        </div>
      ),
      dataIndex: 'name',
      key: 'name',
      render: () => {
        return null;
      },
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
