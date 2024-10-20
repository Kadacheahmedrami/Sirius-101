import React from 'react'


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

}

export default QuizItem

