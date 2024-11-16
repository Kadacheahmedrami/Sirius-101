
import Image from "next/image";
import GameDetails from '../../components/GameDetails';
import Footer from "../../components/Footer"
import Card from "../../components/Card"
import Thiccard from "../../components/Thiccard"
import Browncard from "../../components/Browncard"
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
        
      {/* <Script 
        type="module" 
        src="https://unpkg.com/@splinetool/viewer@1.9.31/build/spline-viewer.js" 
        strategy="afterInteractive" // This loads the script after the page becomes interactive
      /> */}
    <NavBar/>
      <div className="grid-container ">
      <div className=" grid-item p-4 item1 flex flex-col gap-[10px] justify-center items-center">
        <p className={`${unbounded.className}  text-[24px] font-[700] text-[#5966F3]  leading-[28.13px] text-center md:text-start md:justify-start md:items-start w-full`}>
        Our upcoming event
        </p>
        <div className="flex flex-row items-center">
        <h1 className={`text-[32px] md:text-[58px]    ml-16 md:mx-4   font-[700] text-[#121212] leading-[38.13px] md:leading-[56.88px] text-center md:text-start w-full ${minecrafterAlt.className}`}>
        SIRIUS 101 Workshops 
        </h1>
        <Image  src={"knife.svg"} alt="Knif " className="ml-4" width={60} height={60}/>
        </div>
     
        <p className={`${unbounded.className} text-[20px] font-[400] text-[#000000] text-opacity-60 leading-[28.13px] text-center md:text-start `}>
        Sirius 101 is your gateway to exploring the world of Internet of Things (IoT) from the ground up. Whether you{ `'` }re a complete beginner or looking to refresh your knowledge, this workshop covers everything you need to know to get started with IoT technology. Join us as we break down complex concepts into simple, hands-on experiences, all while providing the tools and insights necessary to build your own IoT projects. Let’s embark on this exciting journey together and unlock the endless possibilities of IoT!
        </p>  
      
      </div>
      <div   className="grid-item item2 h-[500px]   justify-center items-center" draggable="false">
        <Image className="" src={'/sr101.svg'} width={1000} height={1000} draggable="false" alt="Robot" />
      </div> 



{/* Separator  */}
      <div  id="Details" className="grid-item  details flex flex-col justify-end items-center">
<Image src={"./land_sepa.svg"} alt='build' width={2900} className="mt-16" height={400}  />
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
          <Browncard 
             mincraft={minecrafterAlt.className}
            src="call.svg" 
            title="Date" 
            paragraph={"Date: 21st /22th NOV "} 
          />
          <Browncard 
             mincraft={minecrafterAlt.className}
            src="poss.svg" 
            title="Place" 
            paragraph={"ESTIN AMIZOUR"} 
          />
       
          
              </div>
              <div className="grid-item item7 flex flex-col lg:flex-row justify-center items-center ">
          <Thiccard
             mincraft={minecrafterAlt.className}
            src="params.svg" 
            title="The Objective of the Game" 
            paragraph={"All you need is a curiosity for technology and a willingness to learn! Whether you're a beginner or have some experience, Sirius 101 is perfect for anyone eager to explore the world of IoT and hardware. Just bring your enthusiasm and an open mind!"}  />
      
          
              </div>
                        <h2 className={` ${minecrafterAlt.className}  text-[38px] mr-auto  lg:text-[56px] font-[400] text-black  text-center`}>
                What will you learn
                </h2>
          <div className="grid-item item7 flex flex-col lg:flex-row justify-center items-center ">
          <Card 
          
            src="arrow.svg" 
            title="IoT Basics" 
            paragraph={"At Sirius 101, you'll dive into the fundamentals of the Internet of Things (IoT). Learn how everyday objects can be connected and controlled through the internet, giving you the foundation to build your own IoT projects. From sensors to communication protocols, you'll gain essential knowledge to start creating smart devices."} 
          />
          <Card 
            src="prize.svg" 
            title="Hardware Skills" 
            paragraph={"Get hands-on with hardware at Sirius 101! We ll teach you how to work with microcontrollers, sensors, and actuators. You ll learn how to design and build your own circuits, gaining the technical skills necessary to bring your ideas to life through physical devices."} 
          />
          <Card 
            src="time.svg" 
            title="Programming for IoT" 
            paragraph={"At Sirius 101, programming is key. You will learn how to write code to control IoT devices, using popular languages like Python and C++. We ll guide you through the process of integrating software with hardware, ensuring you understand how to make your devices come alive and communicate effectively."} 
          />
          
              </div>
              <h2 className={` ${minecrafterAlt.className}  text-[38px] mr-auto  lg:text-[56px] font-[400] text-black  text-center`}>
                Our Mentors
                </h2>
              <div className="grid-item border pt-[20px] flex-col md:flex-row item8 flex justify-center gap-[40px]">
            
                <div className="flex flex-col justify-center items-center gap-[20px] color-">
                <Image alt="pic" src={'mentor.svg'} width={550} height={500}></Image>
                <h2 className={` ${minecrafterAlt.className}  text-[38px]   lg:text-[56px] font-[400] text-black  text-center`}>
               Youcef
                </h2>
                <Image alt="pic" src={'men.svg'} width={150} height={500}></Image>
                </div>
                <div className="flex flex-col justify-center items-center gap-[20px]">
                <Image alt="pic" src={'mentor.svg'} width={550} height={500}></Image>
                <h2 className={` ${minecrafterAlt.className}  text-[38px]   lg:text-[56px] font-[400] text-black  text-center`}>
                Amine
                </h2>
                <Image alt="pic" src={'steve.svg'} width={150} height={500}></Image>

                </div>
                <div className="flex flex-col justify-center items-center gap-[20px]">
                <Image alt="pic" src={'mentor.svg'} width={550} height={500}></Image>
                <h2 className={` ${minecrafterAlt.className}  text-[38px]   lg:text-[56px] font-[400] text-black  text-center`}>
                Zineb
                </h2>
                <Image alt="pic" src={'zineb.svg'} width={150} height={500}></Image>

                </div>


</div>
              <div  id="Details" className="grid-item  details flex flex-col justify-end items-center">
<Image src={"./tnt.svg"} alt='build' width={2900} className="mt-16" height={400}  />

    </div>
              <GameDetails 
        mincraft={minecrafterAlt.className}
        title="previous events" 
          />  


<div className="grid-item border pt-[20px]  flex-col md:flex-row item8 flex justify-center gap-[40px]">
<Image alt="pic" src={'gold.svg'} width={550} height={500}></Image>
<Image alt="pic" src={'silver.svg'} width={550} height={500}></Image>
</div>


 


          </div>
       
     

      <Footer/>

      </>
  );
}
