import React from "react";

const ButtonGoogle = () => {
  return (
    <button className="flex items-center border border-gray-400 py-2 px-5 rounded hover:bg-gray-300 duration-500 space-x-2 w-full justify-center">
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/color/48/google-logo.png"
        alt="google-logo"
      />
      <span>Continue with google</span>
    </button>
  );
};

export default ButtonGoogle;
