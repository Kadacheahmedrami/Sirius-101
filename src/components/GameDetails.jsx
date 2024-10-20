import React from 'react';

const GameDetails = ({ title, paragraph }) => {
  // Split the paragraph into two parts based on the first occurrence of '\n'
  const parts = paragraph.split('&', 2); // Split into at most 2 parts

  return (
    <div  id="Details" className="grid-item details flex flex-col justify-end items-center">
      <div className="w-full bg-[#000000] h-[2px] mb-[5.1%]"></div>
      <h2 className=" text-[38px] lg:text-[58px] font-[700] text-[#121212] leading-[56.88px] text-center mb-[1%] ">
        {title}
      </h2>
      <p className="mb-12 text-[22px] w-[80%] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center">
        {parts[0]} {/* First part of the paragraph */}
        <br /> {/* Line break */}
        {parts[1]} {/* Second part of the paragraph, if it exists */}
      </p>
    </div>
  );
};

export default GameDetails;
