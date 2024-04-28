import { Avatar, Table } from 'antd';
import React from 'react';
import './tableBoardDemo.scss';
import { getFirstCharacter } from '../../util/util';
import IconUser from '../Icon/IconUser';
import { dataColumnDemo } from '../../data/data';
const TableBoardDemo = ({ className, arrColumn }) => {
  const arrColorStatus = ['#FDAB3D', '#00C875', '#DF2E49'];
  const arrColorPriority = ['#579BFC', '#401694', '#5559DF'];
  const columnTable = arrColumn.map(item => {
    switch (item.toLowerCase()) {
      case 'owner':
        return {
          title: item,
          dataIndex: item.toLowerCase(),
          render: text => {
            return text ? (
              <Avatar
                style={{
                  backgroundColor: 'orange',
                  color: 'white',
                }}
              >
                {getFirstCharacter(text)}
              </Avatar>
            ) : (
              <IconUser />
            );
          },
        };
      case 'status':
        return {
          title: item,
          dataIndex: item.toLowerCase(),
          render: (text, record, index) => {
            return (
              <div
                style={{
                  backgroundColor:
                    arrColorStatus[index % arrColorStatus.length],
                }}
                className="text-white absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
              >
                {text}
              </div>
            );
          },
        };
      case 'due date':
        return {
          title: item,
          dataIndex: item.toLowerCase().split(' ').join(''),
          render: (text, record, index) => {
            return (
              <div className="relative">
                {index !== 1 ? (
                  <span className="inline-block w-5 h-5 rounded-full bg-red-500 text-white absolute left-2 top-1/2 -translate-y-1/2">
                    <i className="fa-solid fa-exclamation text-sm"></i>
                  </span>
                ) : (
                  <span className="inline-block w-5 h-5 rounded-full bg-green-500 text-white absolute left-2 top-1/2 -translate-y-1/2">
                    <i className="fa-solid fa-check"></i>
                  </span>
                )}

                <span className={index == 1 && 'line-through'}>{text}</span>
              </div>
            );
          },
        };
      case 'priority':
        return {
          title: item,
          dataIndex: item.toLowerCase(),
          render: (text, record, index) => {
            return (
              <div
                style={{
                  backgroundColor:
                    arrColorPriority[index % arrColorPriority.length],
                }}
                className="text-white absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
              >
                {text}
              </div>
            );
          },
        };
      case 'budget':
        return {
          title: item,
          dataIndex: item.toLowerCase(),
          render: text => {
            return `$ ${text.toLocaleString('en-US')}`;
          },
        };
      case 'files':
        return '';
      case 'time line':
        return {
          title: item,
          dataIndex: item.toLowerCase().split(' ').join(''),
          render: (text, record, index) => {
            return index !== 1 ? (
              <div className="relative left-1/2 -translate-x-1/2 w-32 bg-red-500  flex items-center justify-between text-white px-4 text-xs rounded-3xl py-0.5">
                <i className="fa-solid fa-exclamation text-sm"></i>
                {text}
              </div>
            ) : (
              <div className="relative left-1/2 -translate-x-1/2 w-32 bg-green-500  flex items-center justify-between text-white px-4 text-xs rounded-3xl py-0.5">
                <i className="fa-solid fa-check"></i>
                {text}
              </div>
            );
          },
          width: '150px',
        };
      case 'last update':
        return {
          title: item,
          dataIndex: item.toLowerCase().split(' ').join(''),
          render: (text, record) => {
            return (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-around w-32">
                {text ? (
                  <>
                    <Avatar
                      style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        width: 25,
                        height: 25,
                        fontSize: '12px',
                      }}
                    >
                      {getFirstCharacter(record.owner)}
                    </Avatar>
                    <span>{text}</span>
                  </>
                ) : (
                  <>
                    <IconUser size={'25px'} />
                    <div className="py-2 px-8 rounded-3xl bg-gray-200"></div>
                  </>
                )}
              </div>
            );
          },
        };
      default:
        return {
          title: item,
          dataIndex: item.toLowerCase(),
        };
    }
  });
  columnTable.unshift({
    title: 'Task',
    dataIndex: 'task',
    width: '170px',
  });

  return (
    <div className="board_demo_table">
      <Table
        className={className}
        pagination={false}
        columns={columnTable}
        dataSource={dataColumnDemo}
      />
    </div>
  );
};

export default TableBoardDemo;
