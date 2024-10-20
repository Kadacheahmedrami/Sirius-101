import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
    <div className="logo" draggable="false">
      <a href='/wlcm' className='flex justify-center items-center gap-2'>
      <Image src={"/logo.svg"} className="" height={48} width={48} alt="logo" />
    <Image src={"/SIRIUS.svg"} className="" height={80} width={80} alt="logo1" />
      </a>
   
    </div>
    <ul className="nav-links">
      <li><a className='linea' href="#about">About Sirius</a></li>
      <li><a className='linea'  href="#Details">Game details</a></li>
  
      <div>
       
     <a href="#game"><button  className="button">  I found item</button></a>  
      </div>
    </ul>
    <div className="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
  )
}

export default NavBar