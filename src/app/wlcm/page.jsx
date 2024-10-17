
import Image from "next/image";
import GameDetails from '../../components/GameDetails';
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import MyForm from '../../components/MyForm'; 

import WelcomeGame from "../../components/WelcomeGame";
// import { redirect } from "next/navigation";

export default function Home() {

 


  
  const paragraph = "Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
  return (
<>  
      
                <title>Sirius Game</title>
               
      <NavBar/>
    

      <div className="grid-container">
       
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
    <div className="spline-card h-[400px] w-full bg-white border-4 border-black rounded flex items-center justify-center">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card h-[400px] w-full bg-white border-4 border-black rounded flex items-center justify-center">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card h-[400px] w-full bg-white border-4 border-black rounded flex items-center justify-center">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card h-[400px] w-full bg-white border-4 border-black rounded flex items-center justify-center">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card h-[400px] w-full bg-white border-4 border-black rounded flex items-center justify-center">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode" camera-controls="zoom: false"></spline-viewer>
    </div>
    <div className="spline-card h-[400px] w-full bg-white border-4 border-black rounded flex items-center justify-center">
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode" camera-controls="zoom: false"></spline-viewer>
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
