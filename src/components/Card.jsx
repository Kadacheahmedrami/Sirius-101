import React from 'react';
import Image from 'next/image';

function Card({ src, title, paragraph }) {
  return (
    <div className='flex flex-col justify-start lg: items-center bg-[#121212] w-[90%] lg:w-[524px] lg:h-[560px]   m-[1.5%] rounded-[65px] pt-[15px] lg:p-[30px]  gap-[18px]'>
      <Image src={src} width={100} height={100} alt="Card Image" />
      <h1 className='text-[26px] lg:text-[30px] font-bold leading-[28.44px] text-center text-[#FFFFFF] mb-4'>
        {title}
      </h1>
      <p className='text-[16px] lg:text-[22px] font-bold leading-[30px] text-center text-[#FFFFFF] opacity-80 w-[80%] '>
        {paragraph}
      </p>
    </div>
  );
}

export default Card;
