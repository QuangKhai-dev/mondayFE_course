import { useRoutes } from "react-router-dom";
import GetInfoRegister from "../pages/GetInfoRegister/GetInfoRegister";
import SurveyQuestion from "../pages/SurveyQuestion/SurveyQuestion";
import InviteMember from "../pages/InviteMember/InviteMember";
import CreateBoardTemplate from "../templates/CreateBoardTemplate/CreateBoardTemplate";
const useRoutesCustom = () => {
  let element = useRoutes([
    // {
    //   path: "/",
    //   element: <InviteMember />,
    // },
    {
      path: "/",
      element: <CreateBoardTemplate />,
    },
  ]);

  return element;
};

export default useRoutesCustom;
