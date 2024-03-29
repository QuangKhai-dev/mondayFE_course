import { Table } from 'antd';
import React from 'react';
import './tableBoardDemo.scss';
const TableBoardDemo = ({ data, className }) => {
  let shapeObject = 'bg-gray-300 w-full h-1 rounded-md';
  const columns = [
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'name',
      key: 'name',
      render: text => {
        return <div className={shapeObject}></div>;
      },
    },
    {
      title: <div className={shapeObject}></div>,
      dataIndex: 'status',
      key: 'status',
      render: (text, record, index) => {
        return text ? (
          text
        ) : index == 2 ? (
          ''
        ) : (
          <div className={shapeObject}></div>
        );
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
