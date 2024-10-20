"use client"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Image from "next/image";
import QuizItem from "../../components/QuizItem"
export default function Home() {

const number = 1 
const isright = true
  return (
<>  
              =-
      <NavBar/>
  

    <div className="border w-full   ">
<h1 className="text-3xl font-bold text-center   p-4 ">The Game </h1>
<div className="  flex flex-col items-cente justify-center    lg:flex-row ">
  <div className="flex flex-col border px-8 ">
    <h1 className="font-bold text-lg mb-4 w-[450px]">{number +"-  " } Lorem, ipsigendi quid gfdgdfgfd fgsfdbdgfb bfgfdb em praesentiui hic.</h1>
<QuizItem isright={true} alphabit={3}/>
<QuizItem isright={false} alphabit={"A"}/>
<QuizItem isright={false} alphabit={"B"}/>

<QuizItem alphabit={'C'} />
<div className="flex flex-col mt-8 lg:flex-row justify-between ">
<button className={"  p-2   flex items-center  border rounded-full"}  >
 <h1 className="font-bold"> Cancel </h1>
  </button>
  <button className={` p-2   flex items-center  justify-center rounded-full   ${isright ? "bg-green-400 border-green-600 ": "bg-red-400 border-red-600"}`}>
 <h1> Quit </h1>
  </button>
</div>
    <div>

    </div>
  </div>
  <Image className="cursor-pointer relative left-16" src={'/robot.svg'} width={700} height={700} draggable="false" alt="Robot" />
</div>
    </div>
     

      <Footer/>

      </>
  );
}
