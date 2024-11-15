import React from 'react';
import Image from 'next/image';

const GameDetails = ({ title  , mincraft}) => {
  
  return (
    <div  id="Details" className="grid-item details flex flex-col justify-end items-center">
      <div className="w-full bg-[#000000] h-[2px] mb-[5.1%]"></div>
      <h2 className={` ${mincraft}  text-[38px]   lg:text-[56px] font-[400] text-[#61371F] leading-[56.88px] text-center mb-[1%] `}>
        {title}
      </h2>
<Image src={"./build.svg"} alt='build ' className='hidden md:block ' width={400} height={400}  />
    </div>
  );
};

export default GameDetails;
