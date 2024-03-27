import { Space, Table, Tag } from 'antd';
import React from 'react';
import './layoutViewBoardDemo.scss';
import TableBoardDemo from '../../Components/TableBoardDemo/TableBoardDemo';
const LayoutViewBoardDemo = ({ nameBoard }) => {
  const data = [
    {
      name: '123',
    },
    {
      name: '123',
    },
    {
      name: '123',
    },
    {
      name: '',
    },
  ];
  return (
    <div className="bg-white w-11/12 p-10 pr-0 layout_board_demo">
      {/* title  */}
      <div className="board_demo_title mb-20">
        {/* Kiểm tra nếu dữ liệu khác rỗng sẽ hiển thị còn nếu không sẽ hiển thị thanh xám */}
        {nameBoard ? (
          <p>{nameBoard}</p>
        ) : (
          <div className="bg-gray-300 w-52 h-2 rounded-md"></div>
        )}
      </div>
      {/* table 1  */}
      <TableBoardDemo data={data} />
      {/* table 2  */}
      <TableBoardDemo data={data} className="border_board_green" />
    </div>
  );
};

export default LayoutViewBoardDemo;
