"use client"
import Image from "next/image";
import GameDetails from '../../components/GameDetails';
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import MyForm from '../../components/MyForm'; 
import WelcomeGame from "../../components/WelcomeGame";
import Game from "../../components/Game";
import Script from "next/script";

// async function getId() {
//   try {
//     // Make the fetch request to the API
//     const response = await fetch('http://localhost:3000/api/data');
    
//     // Check if the response is okay (status code 200-299)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
    
//     // Parse the JSON from the response
//     const data = await response.json();
    
//     // Access the userId from the JSON response
//     const userId = data.data.userId;
//     console.log('User ID:', userId);
    
//     // Return the userId for further use
//     return userId;
    
//   } catch (error) {
//     // Handle any errors
//     console.error('There was a problem with the fetch operation:', error);
//   }
// }




export default function Home() {
 

// let id = getId()
// console.log(id)
   return (
<>  
 <title>Sirius Game</title>

               
    
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js" 
        strategy="afterInteractive" // This loads the script after the page becomes interactive
      />

      <div className="grid-container">
       
      <div className=" grid-item item1 flex flex-col gap-[10px] justify-center items-center">
        <p className="text-[23px] font-[700] text-[#7939FF] leading-[28.13px] text-center md:text-start md:justify-start md:items-start w-full">
          Welcome Game
        </p>
        <h1 className="text-[32px] md:text-[58px] font-[700] text-[#121212] leading-[38.13px] md:leading-[56.88px] text-center md:text-start w-full">
          Find the hidden items and <br className="hidden lg:block" /> win prizes on Welcome Day
        </h1>
        <p className="text-[20px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start">
          Siruis is a science club located in Amizour Bejaia formed by a bunch of students from ESTIN to help other students learn about hardware.
        </p>

      <div className="mx-auto md:mx-0">
      <a href="#start" className="mx-auto">
          <button className="cool-button  md:w-[720px] h-[74px] my-5 ">
            Start Playing
          </button>
        </a>
      </div>

     
      
      </div>


      <div   className="grid-item item2 h-[500px] justify-end" draggable="false">
        <Image className="cursor-pointer relative left-16" src={'/robot.svg'} width={1000} height={1000} draggable="false" alt="Robot" />
      </div>

      <div className="hidden md:block animate h-[200px] w-full">
        <Image className="ml-[67%] rotate-[230deg] scale-x-[-1] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 1" />
        <Image className="ml-[60%] rotate-[210deg] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 2" />
        <Image className="ml-[62%] mt-[1%] rotate-[230deg] scale-x-[-1] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 3" />
      </div>

      <div id='about' className="grid-item item3 flex flex-row overflow-hidden justify-center items-center gap-[37%] relative">
        <Image alt="Right" src={'/right.svg'} width={600} height={300}  className='mr-auto'/>
        <Image className="ml-[1000px] md:block absolute md:ml-[0%] mb-[19%] lg:mb-[10%] rotate-[210deg] foot-animation" src={'/bluefoot.svg'} width={30} height={30} alt="Blue Foot 1" />
        <Image className="ml-[1000px] md:block absolute md:ml-[0%] rotate-[210deg] foot-animation" src={'/bluefoot.svg'} width={30} height={30} alt="Blue Foot 2" />
        <Image className="ml-[1000px] md:block absolute md:ml-[-20%] lg:ml-[-15%] rotate-[230deg] scale-x-[-1] foot-animation" src={'/bluefoot.svg'} width={30} height={30} alt="Blue Foot 3" />
        <Image className="ml-[1000px] md:block absolute md:ml-[-15%] mb-[-15%] lg:mb-[-10%] rotate-[230deg] scale-x-[-1] foot-animation" src={'/bluefoot.svg'} width={30} height={30} alt="Blue Foot 4" />
        <div className="text-[32px] md:text-[40px] font-[700] text-[#ffffff] leading-[56.88px] flex flex-row absolute gap-3">
          About  <Image src={'SIRIUS.svg'} height={150} width={130}></Image>
        </div>
        <Image alt="Left" src={'/left.svg'}  className='ml-auto' width={600} height={300} />
      </div>

        <WelcomeGame></WelcomeGame>

      
        <div className="grid-item item5 flex flex-col gap-[15px]  ">


         <h2 className="text-[32px] md:text-[58px] font-[700] text-[#121212] leading-[56.88px] text-center md:text-start" >Why join Us?</h2>
         
         <div className="h-[0px] "></div>
         <h3 className="flex flex-col md:flex-row gap-2 justify-start items-center text-[28px] font-[500] text-[#121212] leading-[32.88px] text-center md:text-start"><Image height={40} width={40} src={'mynaui_star-solid.svg'}></Image>unique</h3>
         <p className="text-[22px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start"> 
         Engage in exciting projects that combine creativity and technology. As part of our IoT club, you’ll be working on innovative solutions that have real-world applications, from smart devices to connected environments. Stand out by being part of a forward-thinking community shaping the future. </p>

       
         <h3 className="flex flex-col md:flex-row gap-2 justify-start items-center text-[28px] font-[500] text-[#121212] leading-[32.88px] text-center md:text-start" ><Image height={40} width={40} src={'mdi_gear.svg'}></Image>Access to Cutting-Edge Technology</h3>
         <p className="text-[22px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start">
         Get hands-on experience with the latest IoT tools, devices, and platforms. Whether {"you're"} building sensor networks or automating systems, you’ll have access to the best technology to bring your ideas to life and create impactful solutions in areas like smart cities, healthcare, and beyond.  </p>
        
       
         <h3 className="flex flex-col md:flex-row gap-2 justify-start items-center text-[28px] font-[500] text-[#121212] leading-[32.88px] text-center md:text-start" ><Image height={40} width={40} src={'tabler_briefcase-filled.svg'}></Image>accomplished mentors</h3>
         <p className="text-[22px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start">
         Learn from experienced professionals in the field of IoT who will guide you every step of the way. Our mentors provide valuable insights and practical knowledge, ensuring you have the skills and understanding to excel in your projects and future career. </p>
         
        </div>
        <div className="grid-item item6 flex justify-end pr-[40px]">
        <Image alt="pic" src={'phamily.svg'} width={650} height={500}></Image>
        </div>
      
        <GameDetails 
        title="Game Details" 
        paragraph="Six hidden cards are scattered around the school of ESTIN. To find each card, you must complete a series of three quizzes per card. Each quiz you solve reveals a hint, giving you more information about the location of the hidden card. Only those who find one card before others qualify for the final game, where you can win prizes that will help boost your IoT career."
          />
          <div className="grid-item item7 flex flex-col lg:flex-row justify-center items-center ">
          <Card 
            src="arrow.svg" 
            title="The Objective of the Game" 
            paragraph={"The goal is to be the first to find one of six hidden cards on campus. Solve quizzes to unlock hints about each card’s location. Only the quickest players will qualify for the final game, with chances to win exciting IoT-related prizes. "} 
          />
          <Card 
            src="prize.svg" 
            title="Win Many Prizes" 
            paragraph={"Players who find the hidden cards will qualify for the final game. In this stage, winners stand a chance to win exciting prizes that will enhance their IoT careers. These prizes are designed to give you hands-on experience with IoT technologies and make you stand out in the field."} 
          />
          <Card 
            src="time.svg" 
            title="The Period of the Game" 
            paragraph={"The game starts on 21 October and ends on 22 October. During this period, players must solve the quizzes, find the hidden cards, and qualify for the final game. Keep your mind sharp and act fast to increase your chances of winning."} 
          />
              </div>

              <GameDetails  
              title="Hints" 
              paragraph=" Play the quizes and get the hints  & then start searching for the cards ."
             />


<div className="grid-item item8 flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
    <Game></Game>
    <Game></Game>
    <Game></Game>
    <Game></Game>
    <Game></Game>
    <Game></Game>
  </div>
</div>




      
              <GameDetails 
        title="Found an item?" 
        paragraph="inform us and show in the welcome day to participate in fun games and have the chance to win cool prizes."
          />
          
           <div id="game" className="grid-item item9 flex justify-center items-start p-[2%]">
          <MyForm></MyForm>
          </div>


          </div>
       
     

      <Footer/>

      </>
  );
}
