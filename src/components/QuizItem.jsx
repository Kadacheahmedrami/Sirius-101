import React from 'react'

<<<<<<< HEAD
function QuizItem({isright="",isselcted="",alphabit}) {
  return (
    <div className={` p-2  mt-2 border  flex items-center  flex-row rounded-full   ${isright ? "bg-green-400 border-green-600 ": "bg-red-400 border-red-600"}`}> 
 <p className='font-bold mr-2'>  {alphabit} </p>
    <div className={`w-4 h-4 border bg-transparent  rounded-full  ${isright ? "bg-green-400": "bg-red-500 "}`}></div>
  <h1 className='ml-4 w-[400px]'>
 Lorem ipsum dolor sit amet consecrferendis.
</h1>
  </div>
  )
=======
function QuizItem({id,text, isSelected, onClick}) {
  const lettres = ['A','B','C','D']

  return (
    <button 
      onClick={onClick}
      className={`z-[2] w-[100%] m-[0px] mb-2 px-4 py-2  rounded-2xl text-left flex justify-start gap-2 items-center 
        ${isSelected ? ' bg-[#b3f6ff] border-[#00e0ff] text-black ' : ' '}
        hover:bg-[#b3f6ff]  focus:border-4  focus:outline-none`}
    >

      <div className='m-[0px] text-[22px] font-bold'>{lettres[id-1]}.</div>
      <div className={`m-[0px] w-8 h-8 border-4 border-black border-opacity-30  rounded-full flex justify-center items-center `}>
      <div className={`w-5 h-5 m-[0px] rounded-full  ${isSelected ? "bg-[#00e0ff]": ""}`}>
        
        </div>
      </div>
 
     
      {text}
      
    </button>
  );
>>>>>>> 95beee64549d7dc20e807d51fb271af85f902bf6
}

export default QuizItem

