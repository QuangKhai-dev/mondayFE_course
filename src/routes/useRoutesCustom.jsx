import { useRoutes } from "react-router-dom";
import GetInfoRegister from "../pages/GetInfoRegister/GetInfoRegister";
import SurveyQuestion from "../pages/SurveyQuestion/SurveyQuestion";
import InviteMember from "../pages/InviteMember/InviteMember";
const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <InviteMember />,
    },
  ]);

  return element;
};

export default useRoutesCustom;
