import React, { useState } from 'react';
import LayoutCreateNameBoard from '../../layout/LayoutCreateNameBoard/LayoutCreateNameBoard';
import LayoutCreateColumnBoard from '../../layout/LayoutCreateColumnBoard/LayoutCreateColumnBoard';
import logoMiniCreateBoard from './../../assets/img/logoMiniCreateBoard.png';
import LayoutViewBoardDemo from '../../layout/LayoutViewBoardDemo/LayoutViewBoardDemo';
const CreateBoardTemplate = () => {
  const [step, setStep] = useState(0);
  const handleStep = number => {
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
      <div className="w-1/2 py-16 px-52 flex flex-col items-center justify-center">
        {/* logo  */}
        <div className="create_board_logo w-full mb-20">
          <img className="h-6 " src={logoMiniCreateBoard} alt="" />
        </div>
        {renderCreateBoard()}
        <div className="mt-20 flex justify-between w-full">
          {step !== 0 ? (
            <button className="py-2 px-4 rounded border border-gray-300">
              Back
            </button>
          ) : (
            <div></div>
          )}
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            className="py-2 px-4 text-white bg-blue-500 rounded"
          >
            Next<i className="fa-solid fa-angle-right ml-2"></i>
          </button>
        </div>
      </div>
      {/* view board  */}
      <div className="w-1/2 bg-orange-500 flex items-center justify-end">
        <LayoutViewBoardDemo />
      </div>
    </div>
  );
};

export default CreateBoardTemplate;
