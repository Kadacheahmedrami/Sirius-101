'use client'
import React, { useState } from 'react';
import Image from 'next/image'; // Ensure you have the right import for your image

const MyForm = ({userId}) => {
  const [HachedImage, setHashedImage] = useState(""); 
  const convertTobase64 = (e)=>{
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = ()=>{
      console.log(reader.result)
      setHashedImage(reader.result)
    }
    reader.onerror = error=>{
console.log("error",error) 

    }
  }

console.log(userId)
  const uploadImage = async (clkId, hashedImage) => {
    try {
      const response = await fetch('/api/updateItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkId : clkId,      // Clerk ID of the user
          foundImage: hashedImage  // New items array
        }),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Image uploaded updated:', result);
      } else {
        console.error('Failed to upload image :', response.statusText);
      }
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };



  return (
    <form className="grid grid-cols-2 gap-4 w-[360px] md:w-[1000px]">
    
      <div className="col-span-2   w-full h-[400px] flex justify-center items-center border-2 border-black border-opacity-40 rounded-xl bg-white relative">
        <input
          type="file"
          // accept='/image'
          id="file-input"
          onChange={convertTobase64}
          // src={HachedImage}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
  {HachedImage && hashedImage !=="" && (  <img src={HachedImage} width={200} height={400} alt="Upload Icon" className="mb-2 z-99   top-0  absolute " />)}  

        <label htmlFor="file-input" className="flex flex-col justify-center items-center text-center cursor-pointer">

          <Image src={'Atach.svg'} width={20} height={20} alt="Upload Icon" className="mb-2 opacity-60" />
          <span className="text-lg text-black opacity-60">Attach the image of the item</span>
        </label>
      </div>


      <button
        type="submit"
        onSubmit={()=>{uploadImage(userId,HachedImage)}}
        className="col-span-2 w-full flex justify-center items-center h-[50px] p-5 bg-[#AB0ABD] text-white rounded-xl mt-4 text-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
