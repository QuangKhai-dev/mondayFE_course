import React from "react";

const ButtonCustom = ({ content, onClick }) => {
  return (
    <button
      className="py-2 bg-blue-500 text-white rounded px-5 hover:bg-blue-600 duration-500 w-full"
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ButtonCustom;
