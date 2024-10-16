import React from 'react';

const CustomInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="col-span-2 lg:col-span-1 w-full p-5 border-2 border-black border-opacity-40 rounded-xl bg-white text-lg text-black"
    />
  );
};

export default CustomInput;
