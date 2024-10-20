import React from 'react';
import CustomInput from '../components/CustomInput';  // Adjust the import path as necessary
import Image from 'next/image'; // Ensure you have the right import for your image

const MyForm = () => {
  return (
    <form className="grid grid-cols-2 gap-4 w-[360px] md:w-[1000px]">
    
      <div className="col-span-2 w-full h-[400px] flex justify-center items-center border-2 border-black border-opacity-40 rounded-xl bg-white relative">
        <input
          type="file"
          id="file-input"
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <label htmlFor="file-input" className="flex flex-col justify-center items-center text-center cursor-pointer">
          <Image src={'Atach.svg'} width={20} height={20} alt="Upload Icon" className="mb-2 opacity-60" />
          <span className="text-lg text-black opacity-60">Attach the image of the item</span>
        </label>
      </div>

      <button
        type="submit"
        className="col-span-2 w-full flex justify-center items-center h-[50px] p-5 bg-[#AB0ABD] text-white rounded-xl mt-4 text-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
