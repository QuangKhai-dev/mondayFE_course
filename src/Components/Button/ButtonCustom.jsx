import React from 'react';

const ButtonCustom = ({
  content,
  onClick,
  type = 'button',
  className,
  styleButton = 'bg-blue-500 text-white hover:bg-blue-600',
  ...props
}) => {
  return (
    <button
      className={`py-2 rounded px-5 duration-500 w-full ${styleButton} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default ButtonCustom;
