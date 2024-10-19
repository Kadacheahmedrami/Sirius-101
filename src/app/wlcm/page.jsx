"use client"
import Image from "next/image";
import GameDetails from '../../components/GameDetails';
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import MyForm from '../../components/MyForm'; 
import WelcomeGame from "../../components/WelcomeGame";
import Script from "next/script";

export default function Home() {
  const paragraph = "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  return (
<>  
 <title>Sirius Game</title>
               
      <NavBar/>
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js" 
        strategy="afterInteractive" // This loads the script after the page becomes interactive
      />

      <div className="grid-container">
       
      <div className="grid-item item1 flex flex-col gap-[10px] justify-center items-center">
        <p className="text-[23px] font-[700] text-[#7939FF] leading-[28.13px] text-center md:text-start md:justify-start md:items-start w-full">
          Welcome Game
        </p>
        <h1 className="text-[32px] md:text-[58px] font-[700] text-[#121212] leading-[38.13px] md:leading-[56.88px] text-center md:text-start w-full">
          Find the hidden items and <br className="hidden lg:block" /> win prizes on Welcome Day
        </h1>
        <p className="text-[20px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start">
          Siruis is a science club located in Amizour Bejaia formed by a bunch of students from ESTIN to help other students learn about hardware.
        </p>
      </div>

      <div className="grid-item item2 h-[500px] justify-end" draggable="false">
        <Image className="cursor-pointer relative left-16" src={'/robot.svg'} width={1000} height={1000} draggable="false" alt="Robot" />
      </div>

      <div className="hidden md:block animate h-[200px] w-full">
        <Image className="ml-[67%] rotate-[230deg] scale-x-[-1] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 1" />
        <Image className="ml-[60%] rotate-[210deg] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 2" />
        <Image className="ml-[62%] mt-[1%] rotate-[230deg] scale-x-[-1] foot-animation" src={'/onefoot.svg'} width={30} height={30} alt="Foot 3" />
      </div>

      <div className="grid-item item3 flex flex-row overflow-hidden justify-center items-center gap-[37%] relative">
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
         Lorem ipsum dolor sit   amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>

       
         <h3 className="flex flex-col md:flex-row gap-2 justify-start items-center text-[28px] font-[500] text-[#121212] leading-[32.88px] text-center md:text-start" ><Image height={40} width={40} src={'mdi_gear.svg'}></Image>Access to Cutting-Edge Technology</h3>
         <p className="text-[22px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
        
       
         <h3 className="flex flex-col md:flex-row gap-2 justify-start items-center text-[28px] font-[500] text-[#121212] leading-[32.88px] text-center md:text-start" ><Image height={40} width={40} src={'tabler_briefcase-filled.svg'}></Image>accomplished mentors</h3>
         <p className="text-[22px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>
         
        </div>
        <div className="grid-item item6 flex justify-end pr-[40px]">
        <Image alt="pic" src={'phamily.svg'} width={650} height={500}></Image>
        </div>
      
        <GameDetails 
        title="Game Details" 
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. &  sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <div className="grid-item item7 flex flex-col lg:flex-row justify-center items-center ">
          <Card 
            src="arrow.svg" 
            title="The Objective of the Game" 
            paragraph={paragraph} 
          />
          <Card 
            src="prize.svg" 
            title="Win Many Prizes" 
            paragraph={paragraph} 
          />
          <Card 
            src="time.svg" 
            title="The Period of the Game" 
            paragraph={paragraph} 
          />
              </div>

              <GameDetails 
              title="Hints" 
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. &  sunt in culpa qui officia deserunt mollit anim id est laborum."
             />


<div className="grid-item item8 flex justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
    <div className="spline-card z-0 flex-col-reverse  w-full bg-white border-4  rounded flex items-center justify-center">
          <div className="play">Play</div>
 
      {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script> */}
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode" className="z-0" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card z-0 flex-col-reverse  w-full bg-white border-4  rounded flex items-center justify-center">
      <div className="play">Play</div>
      {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script> */}
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode"className="z-0" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card z-0 flex-col-reverse  w-full bg-white border-4  rounded flex items-center justify-center">
      <div className="play">Play</div>
 
      {/* <scrixpt type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script> */}
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode"className="z-0" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card z-0 flex-col-reverse  w-full bg-white border-4  rounded flex items-center justify-center">
      <div className="play">Play</div>
  
      {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script> */}
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode"className="z-0" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card z-0 flex-col-reverse  w-full bg-white border-4  rounded flex items-center justify-center">
      <div className="play">Play</div>
      {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script> */}
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode"className="z-0" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card z-0 flex-col-reverse  w-full bg-white border-4  rounded flex items-center justify-center">
      <div className="play">Play</div>
      {/* <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script> */}
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode"className="z-0" camera-controls="zoom: false"></spline-viewer>
    </div>
  </div>
</div>




      
              <GameDetails 
        title="Found an item?" 
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. &  sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          
           <div className="grid-item item9 flex justify-center items-start p-[2%]">
          <MyForm></MyForm>
          </div>


          </div>
       
     

      <Footer/>

      </>
  );
}
