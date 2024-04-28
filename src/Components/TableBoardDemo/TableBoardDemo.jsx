import { Avatar, Table } from 'antd';
import React from 'react';
import './tableBoardDemo.scss';
import { convertDateAndMonth, getFirstCharacter } from '../../util/util';
import IconUser from '../Icon/IconUser';
const TableBoardDemo = ({ className, arrColumn }) => {
  const now = new Date();
  const arrColorStatus = ['#FDAB3D', '#00C875', '#DF2E49'];
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

  const data = [
    {
      task: 'Task 1',
      owner: 'Quang Khải',
      status: 'Working on it',
      duedate: convertDateAndMonth(now, now),
      notes: 'Action items',
    },
    {
      task: 'Task 2',
      owner: '',
      status: 'Done',
      duedate: convertDateAndMonth(
        new Date(new Date().setDate(new Date().getDate() + 1)),
        new Date(new Date().setDate(new Date().getDate() + 1))
      ),
      notes: 'Meeting notes',
    },
    {
      task: 'Task 3',
      owner: '',
      status: 'Stuck',
      duedate: convertDateAndMonth(
        new Date(new Date().setDate(new Date().getDate() + 2)),
        new Date(new Date().setDate(new Date().getDate() + 2))
      ),
      notes: 'Other',
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
