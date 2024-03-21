import React from "react";

const LayoutCreateNameBoard = ({ handleStep }) => {
  return (
    <div>
      LayoutCreateNameBoard
      <button
        onClick={() => {
          handleStep(1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default LayoutCreateNameBoard;
