"use client"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Image from "next/image";
import QuizItem from "../../components/QuizItem"
export default function Home() {

const number = 1 
const right = true
  return (
<>  
              =-
      <NavBar/>
  

    <div className="border  ">
<h1 className="text-2xl font-bold text-center   ">The Game </h1>
<div className="  flex flex-col items-center   lg:flex-row ">
  <div className="flex flex-col border px-8 ">
    <h1 className="font-bold text-lg mb-4 w-[450px]">{number} Lorem, ipsigendi quid gfdgdfgfd fgsfdbdgfb bfgfdb em praesentiui hic.</h1>
<QuizItem isright={true} alphabit={3}/>
<QuizItem isright={false} alphabit={"A"}/>
<QuizItem isright={false} alphabit={"B"}/>

<QuizItem alphabit={'C'}/>

    <div>

    </div>
  </div>
  <Image className="cursor-pointer relative left-16" src={'/robot.svg'} width={500} height={500} draggable="false" alt="Robot" />
</div>
    </div>
     

      <Footer/>

      </>
  );
}
