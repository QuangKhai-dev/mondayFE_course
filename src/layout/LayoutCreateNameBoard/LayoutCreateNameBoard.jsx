import React from 'react';
import InputReset from '../../Components/Input/InputReset';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeNameBoard } from '../../redux/createBoardSlice/createBoardSlice';
const LayoutCreateNameBoard = ({ handleStep, handelResetNameBoard }) => {
  const { board } = useSelector(state => state.createBoardSlice);
  const dispatch = useDispatch();
  return (
    <div className="text-title">
      {/* title  */}
      <h1 className="text-2xl mb-5">Let's start working together</h1>
      <p className="text-sm mb-3">
        Give your board a name, e.g. marketing plan, sales pipeline, quarterly
        roadmap...
      </p>
      {/* input  */}
      <InputReset
        handleChange={event => {
          dispatch(handleChangeNameBoard(event.target.value));
        }}
        handleClick={() => {
          dispatch(handleChangeNameBoard(''));
        }}
        placeholder="My first board"
        value={board.name}
      />
      {/* description  */}
      <div className="bg-slate-100 p-5 rounded-md text-[15px]">
        <p>
          In monday.com, "boards" are the place where all your content lives.
        </p>
      </div>
    </div>
  );
};

export default LayoutCreateNameBoard;
