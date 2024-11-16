import React from 'react';
import Image from 'next/image';

function Browncard({ src, title, paragraph, mincraft }) {
  return (
    <div className='flex flex-col justify-start lg: items-center md:bg-[#DAB58C] w-[90%] lg:w-[41%] lg:h-[260px] md:border-[5px]  md:border-[#C28340] m-[1.5%] mb-[-40px] rounded-[65px] pt-[15px] lg:p-[30px]  gap-[18px]'>
      <Image src={src} width={100} height={100} alt="Card Image" />
      <h1 className={` ${mincraft}  text-[26px] lg:text-[30px] font-bold leading-[28.44px] text-center text-[#666666] md:text-[#FFFFFF] mb-4`}>
        {title}
      </h1>
      <p className='text-[36px] w-full mb-[50px]  lg:text-[36px] font-bold leading-[30px] text-center text-[#666666] md:text-[#FFFFFF] opacity-80  '>
        {paragraph}
      </p>
    </div>
  );
}

export default Browncard;
