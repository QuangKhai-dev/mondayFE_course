import { Radio } from 'antd';
import React, { useState } from 'react';
import IconTable from '../../Components/Icon/IconTable';
import './layoutSelectViewBoard.scss';
import IconTimeLine from '../../Components/Icon/IconTimeLine';
import IconKanBan from '../../Components/Icon/IconKanBan';
import IconCalendar from '../../Components/Icon/IconCalendar';
import IconCard from '../../Components/Icon/IconCard';
import IconGantt from '../../Components/Icon/IconGantt';
const arrRadio = [
  {
    label: (
      <div className="flex items-center space-x-2">
        <span className="bg-purple-500 p-1 rounded inline-block">
          <IconTable />
        </span>
        <span>Table</span>
      </div>
    ),
    value: 'Table',
    data: 'Table view is your default layout. Plan, track and manage anything using a visual board.',
    borderColor: 'border-l-purple-500',
  },
  {
    label: (
      <div className="flex items-center space-x-2">
        <span className="bg-yellow-500 p-1 rounded inline-block">
          <IconTimeLine />
        </span>
        <span>Timeline</span>
      </div>
    ),
    value: 'Timeline',
    data: 'Stay on track with visual deadlines and timelines.',
    borderColor: 'border-l-yellow-500',
  },
  {
    label: (
      <div className="flex items-center space-x-2">
        <span className="bg-blue-500 p-1 rounded inline-block">
          <IconKanBan />
        </span>
        <span>Kanban</span>
      </div>
    ),
    value: 'Kanban',
    data: 'Prioritize and balance work according to capacity.',
    borderColor: 'border-l-blue-500',
  },
  {
    label: (
      <div className="flex items-center space-x-2">
        <span className="bg-pink-300 p-1 rounded inline-block">
          <IconCalendar />
        </span>
        <span>Calendat</span>
      </div>
    ),
    value: 'Calendat',
    data: 'See all upcoming content and due dates at a glance.',
    borderColor: 'border-l-pink-300',
  },
  {
    label: (
      <div className="flex items-center space-x-2">
        <span className="bg-orange-500 p-1 rounded inline-block">
          <IconCard />
        </span>
        <span>Cards</span>
      </div>
    ),
    value: 'Cards',
    data: 'See all your item details in a visual gallery.',
    borderColor: 'border-l-orange-500',
  },
  {
    label: (
      <div className="flex items-center space-x-2">
        <span className="bg-green-600 p-1 rounded inline-block">
          <IconGantt />
        </span>
        <span>Gantt</span>
      </div>
    ),
    value: 'Gantt',
    data: 'Visualize project milestones and dependencies.',
    borderColor: 'border-l-green-600',
  },
];
const LayoutSelectViewBoard = () => {
  const [valueRadio, setValueRadio] = useState(arrRadio[0]);

  return (
    <div className="layout_select_view">
      <h2 className="text-title text-2xl">Add a view layout</h2>
      <p className="text-title text-sm">
        Transform the way you see and manage your work with more unique views.
        You can always add more later.
      </p>
      <div>
        <Radio.Group
          onChange={event => {
            // console.log(event.target);
            // duyệt mảng arrRadio để tìm phần tử được người dùng chọn
            for (let item of arrRadio) {
              if (item.value == event.target.value) {
                console.log(item);
                setValueRadio(item);
              }
            }
          }}
          className="space-y-4"
          options={arrRadio}
          value={valueRadio.value}
        ></Radio.Group>
      </div>
      <p
        className={`bg-gray-200 w-full py-3 pr-10 pl-6 text-sm rounded-md border-l-4 ${valueRadio.borderColor}`}
      >
        {valueRadio.data}
      </p>
    </div>
  );
};

export default LayoutSelectViewBoard;
