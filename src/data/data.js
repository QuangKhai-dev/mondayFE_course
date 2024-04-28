import { convertDateAndMonth, getTodayAndTomorrow } from '../util/util';
const now = new Date();
export const dataColumnDemo = [
  {
    task: 'Task 1',
    owner: 'Quang Khải',
    status: 'Working on it',
    duedate: convertDateAndMonth(now, now),
    notes: 'Action items',
    priority: 'Low',
    budget: 100,
    timeline: getTodayAndTomorrow(now),
    lastupdate: '4 days ago',
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
    priority: 'High',
    budget: 1000,
    timeline: getTodayAndTomorrow(
      new Date(new Date().setDate(new Date().getDate() + 1))
    ),
    lastupdate: '',
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
    priority: 'Medium',
    budget: 500,
    timeline: getTodayAndTomorrow(
      new Date(new Date().setDate(new Date().getDate() + 2))
    ),
    lastupdate: '',
  },
];
