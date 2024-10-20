'use client'
import { useState ,useEffect } from 'react';
import Image from "next/image";
import QuizItem from "../../components/QuizItem";
import Script from "next/script";
import { useUser } from "@clerk/nextjs";
import Loader from "../../components/Loader"
export default function Home() {
  const [clerkId, setClerkId] = useState(null); // Use state to store clerkId
  const [items, setItems] = useState([]); // Use state to store items
  const {user,isLoaded,isSignedIn} =  useUser();


  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setClerkId(user.id); // Use user.id to get the Clerk ID
      setItems(user.items || []); // Assuming user.items exists
      console.log(user.id);
      console.log(user.items);
    }
  }, [isLoaded, isSignedIn, user]);

  if(isLoaded){
  <Loader/>
  }


 
  const updateItems = async (clerkid, updatedItems) => {
    try {
      const response = await fetch('/api/updateItems', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkid,      // Clerk ID of the user
          items: updatedItems  // New items array
        }),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Items updated:', result);
      } else {
        console.error('Failed to update items:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending PUT request:', error);
    }
  };
 


  
console.log(items)
console.log(user)

  const [step, setStep] = useState(1); // Track the current step
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [isCorrect, setIsCorrect] = useState(false); // Check if the answer is correct
  const [showHint, setShowHint] = useState(false); // Control the hint pop-up visibility
  const [select , setSelect] = useState(false);


 

  const Hints = ['First', 'Second' ,'Third'];

  const quizData = {
    1: {
      question: "What is the capital of France?",
      answers: [
        { id: 1, text: "Berlin", isCorrect: false },
        { id: 2, text: "Paris", isCorrect: true },
        { id: 3, text: "Madrid", isCorrect: false },
        { id: 4, text: "chads", isCorrect: false }
      ]
    },
    2: {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { id: 1, text: "Earth", isCorrect: false },
        { id: 2, text: "Mars", isCorrect: true },
        { id: 3, text: "Jupiter", isCorrect: false },
        { id: 4, text: "Nadine", isCorrect: false }
      ]
    },
    3: {
      question: "What is the largest mammal?",
      answers: [
        { id: 1, text: "Elephant", isCorrect: false },
        { id: 2, text: "Blue Whale", isCorrect: true },
        { id: 3, text: "Giraffe", isCorrect: false },
        { id: 4, text: "younes", isCorrect: false }
      ]
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer.isCorrect); // Check if the selected answer is correct
  
  };

  const handleNext = () => {
    if (isCorrect && step < 3) {
      setStep(step + 1);
      setSelectedAnswer(null); // Reset selected answer for the next step
      setIsCorrect(false); // Reset correctness for the next step
      setShowHint(false); // Hide the hint pop-up
    } else {
      // post request 
      // the player won
      location.href = '/wlcm';
    }
  };

  const show = ()=>{
    if (isCorrect) {
      setShowHint(true); // Show the hint pop-up
    }
    else {
      // post request
      // the player lost
      if(select){
        location.href = '/wlcm';
      }
      else{
        // didnt select yet
      }
      
    } 
  }

  const closeHint = () => {
    setShowHint(false);
  };

  return (
    <>



<Script 
  type="module" 
  src="https://unpkg.com/@splinetool/viewer@1.9.32/build/spline-viewer.js" 
  strategy="afterInteractive" // This loads the script after the page becomes interactive
/>


<div className='absolute bottom-[20%] w-[200%] h-[820px] translate-y-[25%] translate-x-[15%] overflow-hidden z-[-1] min-h-screen md:z-[1] opacity-20 md:opacity-100'>
<spline-viewer url="https://prod.spline.design/jHlH12SKOpUm3lVo/scene.splinecode"></spline-viewer>
        
</div>

      {/* Foggy Background Overlay when the hint is shown */}
      {showHint && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
           

      <div className={` w-[100%] lg:w-[60%] mt-10   ${showHint ? 'blur-sm' : ''}`}>

        <h1 className="text-[58px] hidden lg:block font-bold text-center">The Game</h1>

        {/* Quiz Content */}
        <div className="flex gap-[10px] flex-col lg:flex-row w-[100%]">
          <div className="flex flex-col gap-1  px-2 lg:px-8 mb-4 w-[100%] lg:w-[50%]">
            <h1 className=" font-bold text-lg lg:mb-4 w-[450px]">{step + ') ' + quizData[step].question}</h1>
            {quizData[step].answers.map((answer) => (
              <QuizItem
                key={answer.id}
                id={answer.id}
                text={answer.text}
                isSelected={selectedAnswer && selectedAnswer.id === answer.id}
                onClick={() => {
                  handleAnswerSelect(answer)
                  setSelect(true)
                } }
              />
            ))}
            <button className='bg-green-400 w-[400px] h-[400px] '  onClick={()=>{updateItems(clerkId, [6, 6, 6, 6, 6, 6]);  // Example of updating the items array
}}>
           <h1 className='text-3xl '>   change the items bro</h1>
            </button>
            <button
              onClick={ show }
              className='z-[2] w-[100%] h-[51px] rounded-[100px] bg-[#AB0ABD] text-white text-[22px] font-[700] flex justify-center items-center'>
              Submit
            </button>
          </div>

    
        </div>

        {/* Stepper Navigation */}
        <div className="z-[3] flex justify-center mt-4 ">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`h-12 md:h-14 w-12 md:w-14 rounded-full  border-black border-opacity-60 flex items-center justify-center ${step >= s ? 'bg-[#17A2B8] text-white border-[#17A2B8]' : 'bg-gray-300 text-black'}`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-20 h-1 ${step > s ? 'bg-[#17A2B8]' : 'bg-gray-300'}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Hint Modal */}
      {showHint && (
        <div className="absolut w-[100%]   flex justify-center translate-y-[-80%] items-center z-50"
        onClick={handleNext}
        >
          <div className="bg-[#AB0ABD] h-[480px] p-6 rounded-[48px] shadow-lg md:w-[40%] flex flex-col justify-center items-center gap-[15px]">
            <div className="text-white text-[30px] font-bold p-[10px] px-[20px] border-[#00E0FF] border-[2px]  rounded-[30px] justify-center items-center flex flex-row gap-[10px]">
              {Hints[step-1]} Hint <Image src={'lamp.svg'} width={30} height={30}></Image>
              </div>
            <p className='text-white w-[90%] text-center text-[20px]'>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et 
               dolore magna aliqua.
               sunt in culpa qui officia deserunt mollit
                anim id est laborum.</p>
            <div className="flex  w-[90%] justify-end mt-4">
              <button
                onClick={handleNext}
                className="bg-black h-[54px] font-[700] rounded-[10px] flex justify-center items-center text-[20px] text-white w-[100%] px-4 py-2 ">
                Next
              </button>
        
            </div>
          </div>
        </div>
      )}
    </>
  );
}
