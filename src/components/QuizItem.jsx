import React from 'react'

function QuizItem({isright="",alphabit}) {
  return (
    <div className={` p-2  mt-2 border  flex items-center  flex-row rounded-full   ${isright ? "bg-green-400": "bg-red-400 "}`}> 
 <p className='font-bold mr-2'>  {alphabit} </p>
    <div className={`w-4 h-4 border   rounded-full  ${isright ? "bg-green-400": "bg-red-500 "}`}></div>
  <h1 className='ml-4 w-[400px]'>
 Lorem ipsum dolor sit amet consecrferendis.
</h1>
  </div>
  )
}

export default QuizItem