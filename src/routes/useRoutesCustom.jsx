import { useRoutes } from "react-router-dom";

import SignUpNew from "../pages/SignUpNew/SignUpNew";
import GetInfoRegister from "../pages/GetInfoRegister/GetInfoRegister";
const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <GetInfoRegister />,
    },
  ]);

  return element;
};

export default useRoutesCustom;
