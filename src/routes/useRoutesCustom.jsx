import { useRoutes } from "react-router-dom";
import GetInfoRegister from "../pages/GetInfoRegister/GetInfoRegister";
import SurveyQuestion from "../pages/SurveyQuestion/SurveyQuestion";
const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <SurveyQuestion />,
    },
  ]);

  return element;
};

export default useRoutesCustom;
