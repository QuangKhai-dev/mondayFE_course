import React, { useState } from 'react';

const InputSearch = () => {
  const [value, setValue] = useState('');
  const handleResetValue = () => {
    setValue('');
  };
  return (
    <div className="px-4 py-1 border border-blue-500 rounded relative hover:border-black duration-500">
      <input
        type="text"
        onChange={e => {
          setValue(e.target.value);
        }}
        value={value}
        className="focus:outline-none text-sm w-full"
        placeholder="Search for a workspace"
      />
      <button
        // onClick={handleClick}
        onClick={value && handleResetValue}
        className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 leading-none rounded hover:bg-slate-200"
      >
        {value ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i class="fa-solid fa-magnifying-glass"></i>
        )}
      </button>
    </div>
  );
};

export default InputSearch;
