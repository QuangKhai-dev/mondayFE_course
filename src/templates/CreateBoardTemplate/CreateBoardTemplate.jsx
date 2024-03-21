import React, { useState } from "react";
import LayoutCreateNameBoard from "../../layout/LayoutCreateNameBoard/LayoutCreateNameBoard";
import LayoutCreateColumnBoard from "../../layout/LayoutCreateColumnBoard/LayoutCreateColumnBoard";
import logoMiniCreateBoard from "./../../assets/img/logoMiniCreateBoard.png";
const CreateBoardTemplate = () => {
  const [step, setStep] = useState(0);
  const handleStep = (number) => {
    // -1
    // 1
    setStep(step + number);
  };
  const renderCreateBoard = () => {
    switch (step) {
      case 0:
        return <LayoutCreateNameBoard handleStep={handleStep} />;
      case 1:
        return <LayoutCreateColumnBoard />;
    }
  };
  return (
    <div className="h-screen flex">
      {/* content board  */}
      <div className="w-1/2 py-16 px-32">
        {/* logo  */}
        <div className="create_board_logo">
          <img className="h-6" src={logoMiniCreateBoard} alt="" />
        </div>
        {renderCreateBoard()}
      </div>
      {/* view board  */}
      <div className="w-1/2 bg-orange-500"></div>
    </div>
  );
};

export default CreateBoardTemplate;
