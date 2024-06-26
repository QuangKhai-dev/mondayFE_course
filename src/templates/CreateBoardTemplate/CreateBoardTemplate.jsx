import React, { useState } from 'react';
import LayoutCreateNameBoard from '../../layout/LayoutCreateNameBoard/LayoutCreateNameBoard';
import LayoutCreateColumnBoard from '../../layout/LayoutCreateColumnBoard/LayoutCreateColumnBoard';
import logoMiniCreateBoard from './../../assets/img/logoMiniCreateBoard.png';
import LayoutViewBoardDemo from '../../layout/LayoutViewBoardDemo/LayoutViewBoardDemo';
import ButtonCustom from '../../Components/Button/ButtonCustom';
import LayoutSelectViewBoard from '../../layout/LayoutSelectViewBoard/LayoutSelectViewBoard';
import { adjustArray } from '../../util/util';
import LayoutSelectItemManager from '../../layout/LayoutSelectItemManager/LayoutSelectItemManager';
const CreateBoardTemplate = () => {
  const [step, setStep] = useState(0);

  const [arrColumn, setArrColumn] = useState(['Owner', 'Status', 'Due Date']);
  const handleStep = number => {
    // -1
    // 1
    setStep(step + number);
  };

  // handleChangeArrColumn
  const handleChangeArrColumn = checkedValue => {
    console.log(checkedValue);
    const result = adjustArray(arrColumn, checkedValue);
    console.log(result);
    setArrColumn(result);
  };

  const renderCreateBoard = () => {
    switch (step) {
      // case 0:
      //   return <LayoutCreateNameBoard handleStep={handleStep} />;
      // case 1:
      //   <div></div>;
      case 0:
        return <LayoutSelectItemManager />;
      // case 0:
      //   return <LayoutSelectViewBoard />;
    }
  };

  const handleNextStep = number => {
    setStep(step + number);
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
            <ButtonCustom
              content={
                <>
                  <i className="fa-solid fa-angle-left mr-2"></i>
                  <span>Back </span>
                </>
              }
              styleButton="border-gray-300 border"
              className={'w-max'}
              onClick={() => {
                handleNextStep(-1);
              }}
            />
          ) : (
            <div></div>
          )}

          <ButtonCustom
            content={
              <>
                <span>Next</span>
                <i className="fa-solid fa-angle-right ml-2"></i>
              </>
            }
            onClick={() => {
              handleNextStep(1);
            }}
            className={'w-max'}
          />
        </div>
      </div>
      {/* view board  */}
      <div className="w-1/2 bg-orange-500 flex items-center justify-end">
        <LayoutViewBoardDemo arrColumn={arrColumn} />
      </div>
    </div>
  );
};

export default CreateBoardTemplate;
