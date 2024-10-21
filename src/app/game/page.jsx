'use client'
import { useState ,useEffect } from 'react';
import Image from "next/image";
import QuizItem from "../../components/QuizItem";
import Script from "next/script";

export default function Home() {
  // const [clerkId, setClerkId] = useState(null); // Use state to store clerkId
  // const [items, setItems] = useState([]); // Use state to store items
  // console.log("user : ")
  // console.log(user)

  // if (!isLoaded || !isSignedIn) {
  //   return <div>Loading...</div>;  // Optionally, show a loading message
  // }

  const [step, setStep] = useState(1); // Track the current step
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [isCorrect, setIsCorrect] = useState(false); // Check if the answer is correct
  const [showHint, setShowHint] = useState(false); // Control the hint pop-up visibility
  const [select , setSelect] = useState(false);

  const Hints = ['First', 'Second' ,'Third']; 
   const [data , setData] = useState(false);



  const quizes = [
    {
      1: {
        question: "In the world of binary, we deal with ones and zeros. What is the decimal value of the binary number 10001?",
        answers: [
          { id: 1, text: "15", isCorrect: false },
          { id: 2, text: "17", isCorrect: true },
          { id: 3, text: "19", isCorrect: false },
          { id: 4, text: "21", isCorrect: false }
        ]
      },
      2: {
        question: "What is the world’s first computer virus called?",
        answers: [
          { id: 1, text: "Creeper", isCorrect: true },
          { id: 2, text: "ILOVEYOU", isCorrect: false },
          { id: 3, text: "MyDoom", isCorrect: false },
          { id: 4, text: "Code Red", isCorrect: false }
        ]
      },
      3: {
        question: "If you were to text 'SOS' in Morse code, what would it look like?",
        answers: [
          { id: 1, text: "... --- ...", isCorrect: true },
          { id: 2, text: "- - - ...", isCorrect: false },
          { id: 3, text: "... --- .", isCorrect: false },
          { id: 4, text: ". . - - .", isCorrect: false }
        ]
      }
    },
    {
      1: {
        question: "What tech company was the first to introduce electric cars to the mainstream market?",
        answers: [
          { id: 1, text: "Tesla", isCorrect: true },
          { id: 2, text: "Ford", isCorrect: false },
          { id: 3, text: "Toyota", isCorrect: false },
          { id: 4, text: "BMW", isCorrect: false }
        ]
      },
      2: {
        question: "Which of the following is a popular framework for building web applications in JavaScript?",
        answers: [
          { id: 1, text: "Flask", isCorrect: false },
          { id: 2, text: "Django", isCorrect: false },
          { id: 3, text: "Angular", isCorrect: true },
          { id: 4, text: "Ruby on Rails", isCorrect: false }
        ]
      },
      3: {
        question: "In tech terms, what does 'URL' stand for?",
        answers: [
          { id: 1, text: "Uniform Resource Locator", isCorrect: true },
          { id: 2, text: "Universal Reference Link", isCorrect: false },
          { id: 3, text: "Uniform Reference Locator", isCorrect: false },
          { id: 4, text: "Universal Resource Link", isCorrect: false }
        ]
      }
    },
    {
      1: {
        question: "Which computer hardware component is known as the 'brain' of the computer?",
        answers: [
          { id: 1, text: "GPU", isCorrect: false },
          { id: 2, text: "Hard Drive", isCorrect: false },
          { id: 3, text: "CPU (Central Processing Unit)", isCorrect: true },
          { id: 4, text: "RAM", isCorrect: false }
        ]
      },
      2: {
        question: "Which programming language is primarily used for iOS app development?",
        answers: [
          { id: 1, text: "Java", isCorrect: false },
          { id: 2, text: "Swift", isCorrect: true },
          { id: 3, text: "Python", isCorrect: false },
          { id: 4, text: "Kotlin", isCorrect: false }
        ]
      },
      3: {
        question: "What does RAM stand for?",
        answers: [
          { id: 1, text: "Read Access Memory", isCorrect: false },
          { id: 2, text: "Random Access Memory", isCorrect: true },
          { id: 3, text: "Read Allocation Memory", isCorrect: false },
          { id: 4, text: "Random Allocation Memory", isCorrect: false }
        ]
      }
    }
  ];
  
    const revealHint = [
       {
        0:  "   صحاااا شلواح فخورة : KEEP THIS NUMBER YOU ARE GONNA NEED IT",
        1:  "    win les absences ytmarkaw 😬😬😬",
        2:  "     AT Salle TD numero =  the number of the first quiz !"
      },
      {
        0:  "   TESLA , like the one u cant affffford",
        1:  "   win les absences ytmarkaw 😬😬😬",
        2:  "   معولتكش توصل هنا  head to elecrtric station en face administration      "
      },
      {
        0:  "   the only game  to play at ESTIN",
        1:  "   FIHA boulle mesrou9a",
        2:  " Head to the babyfoot li mafihach boulla ( لقبايل لي سرقوها )  fla biiiiiiiiiiiib .  "
      },
      {
        0:  "   BROKEN FOR YEARS ",
        1:  "9bel maykoun 3ndna foyer we existed b  un distribiteur fachel  .",
        2:  " the non-working vending machine .just like your RIZZ "
      },
      {
        0:  "   Water flows just like data there ",
        1:  " unnecessary part fl campus jay vraiment useless , لخرة وصاي",
        2:  " Now head to the fountain  between amphie1 and amphie5 ."
      },
      {
        0:  " RAHI 3ND BNADEM THIS TIME CEO OF DRACARYSMODES ",
        1:  "  شيكور الدنياThis person is a famous 2CP student G0X (been in 2cp for two years now)",
        2:  " FIND THE GMAIL SPAMMER AND TELL HIM  قبضة البعبع"
      },


    ]


   let i=1
  const quizData = quizes[i]
  const hinttext = revealHint[i]
  // useEffect(() => {
  //   if (isLoaded && isSignedIn) {
  //     setClerkId(user.id); // Use user.id to get the Clerk ID
  //     setItems(user.items); // Assuming user.items exists
  //     console.log(clerkId)
  //     console.log(user.items); 
  //   }
  // }, [isLoaded, isSignedIn, user]);


 
 
  const updateItems = async (clkId, updatedItems) => {
    try {
      const response = await fetch('/api/updateItems', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clerkId : clkId,      // Clerk ID of the user
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
 



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.data); // Accessing the 'data' field from your API response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  


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
      location.href = '/wlcm#game';
    }
  };

  const show = ()=>{
    if (isCorrect) {
       setSelect(false)
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
  // if(isLoaded){
  //   return <Loader/>
  //    }
  return (
    <>



<Script 
  type="module" 
  src="https://unpkg.com/@splinetool/viewer@1.9.32/build/spline-viewer.js" 
  strategy="afterInteractive" // This loads the script after the page becomes interactive
/>


<div className='hidden md:block absolute bottom-[20%] w-[200%] h-[820px] translate-y-[25%] translate-x-[15%] overflow-hidden z-[-1] min-h-screen md:z-[1] opacity-20 md:opacity-100'>
<spline-viewer url="https://prod.spline.design/jHlH12SKOpUm3lVo/scene.splinecode"></spline-viewer>
        
</div>

      {/* Foggy Background Overlay when the hint is shown */}
      {showHint && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
           

      <div className={`flex flex-col w-[100%] lg:w-[60%] mt-10   ${showHint ? 'blur-sm' : ''}`}>

        <h1 className="text-[58px] hidden lg:block font-bold text-center">The Game</h1>

        {/* Quiz Content */}
        <div className="flex gap-[10px] flex-col lg:flex-row w-[100%]">
          <div className="flex flex-col gap-1  px-2 lg:px-8 mb-4 w-[100%] lg:w-[50%]">
            <h1 className=" font-bold text-lg lg:mb-4 w-[100%] md:w-[450px]">{step + ') ' + quizData[step].question}</h1>
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
  
            <button
              onClick={ show }
              className='z-[2] w-[100%] h-[51px] rounded-[100px] bg-[#AB0ABD] text-white text-[22px] font-[700] flex justify-center items-center'>
              Submit
            </button>


            {/* <button
              onClick={()=>updateItems(data.userId,[7,7,7,7,7,7])}
              className='z-[50] w-[100%] absolute h-[200px] rounded-[100px] bg-red-500 text-white text-[22px] font-[700] flex justify-center items-center'>
SEND THE REQUEST            </button> */}
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
            <p className='text-white w-[90%] text-center text-[50px]'>
             { hinttext[step-1] }
              </p>
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
