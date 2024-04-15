import { useRoutes } from 'react-router-dom';
import GetInfoRegister from '../pages/GetInfoRegister/GetInfoRegister';
import SurveyQuestion from '../pages/SurveyQuestion/SurveyQuestion';
import InviteMember from '../pages/InviteMember/InviteMember';
import CreateBoardTemplate from '../templates/CreateBoardTemplate/CreateBoardTemplate';
import HomeTemplate from '../templates/HomeTemplate/HomeTemplate';
const useRoutesCustom = () => {
  let element = useRoutes([
    // {
    //   path: "/",
    //   element: <InviteMember />,
    // },
    {
      path: '/',
      element: <HomeTemplate />,
    },
  ]);

  return element;
};

export default useRoutesCustom;
