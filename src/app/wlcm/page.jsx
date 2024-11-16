
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
      
      <div className="mx-auto md:mx-0">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfz-wuoV_g-uWGHr81d4SNCNujBTNhYCNShXsNYPPxt4v8k6g/viewform" className="mx-auto">
          <button className="cool-button  md:w-[790px] h-[74px] my-5 ">
            Register Now
          </button>
        </a>
      </div>
      </div>
      <div   className="grid-item item2 h-[500px]   justify-center items-center" draggable="false">
        <Image className="" src={'/sr101.svg'} width={1000} height={1000} draggable="false" alt="Robot" />
      </div> 



{/* Separator  */}
      <div  id="Details" className="grid-item  details flex flex-col justify-end items-center">
<Image src={"./land_sepa.svg"} alt='build' width={2900} className="mt-16" height={400}  />
    </div>



    <GameDetails 
        mincraft={minecrafterAlt.className}
        title="SIRIUS Club" 
          />  

<div className="flex relative flex-col md:flex-row items-center gap-8 details mt-8  justify-center ">
  <Image alt="logo" src={"./sir.svg"} width={250} height={250}   /> 
  <Image  src={"./fantom.svg"} alt="person" width={200} className="absolute hidden 2xl:block  right-[200px]  -top-[300px]" height={200} />

  <div className="flex flex-col justify-center gap-4 items-center md:items-start">
    <h1 className={`${minecrafterAlt.className} text-[32px] `}>What is SIRIUS?</h1>
    <p className="text-[18px] max-w-[500px] md:max-w-[900px] ">
    Sirius is a dynamic science club based in Amizour, Bejaia, formed by a group of passionate students from ESTIN. Our mission is to empower fellow students with the knowledge and skills needed to explore the world of hardware and technology. Whether you are just starting out or looking to deepen your understanding, Sirius provides hands-on learning experiences, workshops, and a collaborative community to help you grow. Join us and be part of a team that is all about creating, innovating, and learning together!
    </p>
    </div> 
</div>
<div className="flex flex-col items-center justify-center border details mt-8"> 

<Image  alt="teammate" className="hidden lg:block" width={1200} height={800} src={"./clubteam.svg"}/>
</div>


<div  id="Details" className="grid-item  details flex flex-col justify-end items-center">
<Image src={"./iron_sepa.svg"} alt='build' width={2900} className="mt-16" height={400}  />
    </div>
   

    <GameDetails 
        mincraft={minecrafterAlt.className}
        title="previous events" 
          />  
    {/* nasaspace */}
<div className="flex relative flex-col md:flex-row justify-center items-center  my-16 px-8  details gap-4">
 <Image  src={"./person.svg"} alt="person" width={40} className="absolute hidden xl:block -top-[77px] right-[400px]" height={200} />
  <div   className="flex flex-col justify-center items-center md:items-start text-center   md:text-start  " >

  <h1 className={`${minecrafterAlt.className} text-[40px]   text-center  `}>
  NASA SPACE APPS
  </h1>
  <p className="text-[18px] max-w-[650px]">
  Sirius participated in the prestigious NASA Space Apps Challenge, a global competition where students and innovators create web and app solutions inspired by NASA’s space technologies. Our team was challenged to think outside the box, utilizing cutting-edge technology to develop ideas that could help solve real-world space-related problems. The event allowed us to connect with other passionate tech enthusiasts and demonstrate our ability to innovate under pressure.
  </p>
  </div>

  <Image  src={"./nasaspace.svg"} width={500} height={500} alt="nasaspace"/>
</div>
{/* sirus101 */}
<div className="flex relative flex-col md:flex-row-reverse justify-center  items-center  my-16 px-8  details gap-4">

  <div  className="flex flex-col justify-center items-center md:items-start text-center   md:text-start  ">

  <h1 className={`${minecrafterAlt.className} text-[40px]   text-center  `}>
  SIRIUS 101
  </h1>
  <p className="text-[18px] max-w-[650px]">
  Our first Sirius 101 workshop was an exciting introduction to the world of IoT (Internet of Things). We designed the event to give participants a hands-on learning experience, breaking down complex concepts into simple, digestible lessons. From understanding basic hardware to developing IoT projects, the workshop provided valuable insights and practical skills, empowering students to kickstart their journey in the tech world
  </p>
  </div>
  <Image  src={"./prv101.svg"} width={500} height={500} alt="prv101"/>


</div>

    {/* hackathon */}
<div className="flex relative flex-col md:flex-row justify-center items-center  my-16 px-8  details gap-4">
 <Image  src={"./person.svg"} alt="person" width={40} className="absolute hidden xl:block -top-[77px] right-[400px]" height={200} />
  <div className="flex flex-col justify-center items-center md:items-start text-center   md:text-start  ">

  <h1 className={`${minecrafterAlt.className} text-[40px]     `}>
  HACKATHON Bejaia
  </h1>
  <p className="text-[18px] max-w-[650px] ">
  In collaboration with GDCS, we hosted the Hackathon Bejaia at Hotel Raya, a high-energy event bringing together tech enthusiasts and problem solvers. Teams competed in coding challenges that pushed their creativity and technical skills to the limit. This hackathon was a true celebration of teamwork and innovation, offering participants the opportunity to collaborate, learn, and showcase their skills in a competitive yet supportive environment.  </p>
  </div>

  <Image  src={"./hackathonbj.svg"} width={500} height={500} alt="hackthon"/>
</div>

{/* Sepa */}
<div  id="Details" className="grid-item  details flex flex-col justify-end items-center">
<Image src={"./sepa4.svg"} alt='build' width={2900} className="mt-16" height={400}  />
    </div>

    <GameDetails 
        mincraft={minecrafterAlt.className}
        title="SIRIUS 101" 
          />  



<div className="flex relative flex-col md:flex-row-reverse justify-center   items-center  my-24 px-8  details gap-4">

 <Image  src={"./ghast.svg"} alt="person" width={200} className="absolute hidden 2xl:block  right-[200px]  -top-[300px]" height={200} />
  <div  className="flex flex-col justify-center items-center md:items-start text-center   md:text-start  ">

  <h1 className={`${minecrafterAlt.className} text-[40px]   text-center  `}>
  What is SIRIUS 101?  </h1>
  <p className="text-[18px] max-w-[650px]">
  Sirius 101 is your gateway to exploring the world of Internet of Things (IoT) from the ground up. Whether you are a complete beginner or looking to refresh your knowledge, this workshop covers everything you need to know to get started with IoT technology. Join us as we break down complex concepts into simple, hands-on experiences, all while providing the tools and insights necessary to build your own IoT projects. Lets embark on this exciting journey together and unlock the endless possibilities of IoT!
  </p>
  </div>
  <Image  src={"./sr101.svg"} width={500} height={500} alt="prv101"/>


</div>
              <div className="grid-item item7 flex flex-col lg:flex-row justify-center items-center ">
          <Browncard 
             mincraft={minecrafterAlt.className}
            src="call.svg" 
            title="Date" 
            paragraph={"Date: 22st /23th NOV "} 
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
            title="requirement" 
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
