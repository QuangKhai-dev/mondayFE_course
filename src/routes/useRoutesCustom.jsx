import { useRoutes } from "react-router-dom";
import ButtonGoogle from "./../Components/Button/ButtonGoogle";
const useRoutesCustom = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <ButtonGoogle />,
    },
  ]);

  return element;
};

export default useRoutesCustom;
