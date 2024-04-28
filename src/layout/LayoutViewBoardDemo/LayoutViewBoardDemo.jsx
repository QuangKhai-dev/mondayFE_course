import { Space, Table, Tag } from 'antd';
import React from 'react';
import './layoutViewBoardDemo.scss';
import TableBoardDemo from '../../Components/TableBoardDemo/TableBoardDemo';
import { useSelector } from 'react-redux';
import { dataColumnDemo } from '../../data/data';
const LayoutViewBoardDemo = ({ arrColumn }) => {
  const { board } = useSelector(state => state.createBoardSlice);
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
  // const dataDemoTable = [
  //   {
  //     name: 'abc',
  //     status: 'In Progress',
  //   },
  //   {
  //     status: 'Ready to start',
  //   },
  //   {},
  // ];
  return (
    <div className="bg-white w-11/12 p-10 pr-0 layout_board_demo">
      {/* title  */}
      <div className="board_demo_title mb-20">
        {/* Kiểm tra nếu dữ liệu khác rỗng sẽ hiển thị còn nếu không sẽ hiển thị thanh xám */}
        {board.name ? (
          <p>{board.name}</p>
        ) : (
          <div className="bg-gray-300 w-52 h-2 rounded-md"></div>
        )}
      </div>
      {/* table 1  */}
      <TableBoardDemo arrColumn={arrColumn} data={dataColumnDemo} />
      {/* table 2  */}
      <TableBoardDemo
        arrColumn={arrColumn}
        className="border_board_green mt-10"
      />
    </div>
  );
};

export default LayoutViewBoardDemo;
