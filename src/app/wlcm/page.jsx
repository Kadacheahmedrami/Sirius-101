
import Image from "next/image";
import GameDetails from '../../components/GameDetails';
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import WelcomeGame from "../../components/WelcomeGame";
import Script from "next/script";
import NavBar from "../../components/NavBar";
import localFont from "next/font/local";
import { Unbounded } from 'next/font/google';
const unbounded = Unbounded({
  weight: ['400', '700'],  // specify weights as needed
  subsets: ['latin'],      // specify subsets
});

const minecrafterAlt = localFont({
  src:'../fonts/Minecrafter.Alt.ttf',
  display: 'swap',
  weight: '300', // Specify weight if needed
  style: 'normal' // Specify style if needed
});
export default function Home() {


   return (
<>  
        
      <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js" 
        strategy="afterInteractive" // This loads the script after the page becomes interactive
      />
    <NavBar/>
      <div className="grid-container border">
      <div className=" grid-item item1 flex flex-col gap-[10px] justify-center items-center">
        <p className={`${unbounded.className}  text-[24px] font-[700] text-[#5966F3]  leading-[28.13px] text-center md:text-start md:justify-start md:items-start w-full`}>
        Our upcoming event
        </p>
        <div className="flex flex-row items-center">
        <h1 className={`text-[32px] md:text-[58px]  mr-4 font-[700] text-[#121212] leading-[38.13px] md:leading-[56.88px] text-center md:text-start w-full ${minecrafterAlt.className}`}>
        SIRIUS 101 Workshops 
        </h1>
        <Image  src={"knife.svg"} alt="Knif " width={60} height={60}/>
        </div>
     
        <p className={`${unbounded.className} text-[20px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start `}>
        Sirius 101 is your gateway to exploring the world of Internet of Things (IoT) from the ground up. Whether you{ `'` }re a complete beginner or looking to refresh your knowledge, this workshop covers everything you need to know to get started with IoT technology. Join us as we break down complex concepts into simple, hands-on experiences, all while providing the tools and insights necessary to build your own IoT projects. Let’s embark on this exciting journey together and unlock the endless possibilities of IoT!
        </p>


     
      
      </div>
      <div   className="grid-item item2 h-[500px] justify-end" draggable="false">
        <Image className="cursor-pointer relative left-16" src={'/sr101.svg'} width={1000} height={1000} draggable="false" alt="Robot" />
      </div> 
        <div className="grid-item item5 flex flex-col gap-[15px]  border">

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
        <div className="grid-item item6 border flex justify-end pr-[40px]">
        <Image alt="pic" src={'phamily.svg'} width={650} height={500}></Image>
        </div>

  
        <GameDetails 
        mincraft={minecrafterAlt.className}
        title="SIRIUS Club" 
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
        mincraft={minecrafterAlt.className}
        title="previous events" 
          />  


<div className="grid-item border bg-red-400  item8 flex justify-center">

</div>


 


          </div>
       
     

      <Footer/>

      </>
  );
}
