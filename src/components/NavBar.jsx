import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
    <div className="logo" draggable="false">
      <a href='/wlcm' className='flex justify-center items-center gap-2'>
      <Image src={"/logo101.svg"} className="" height={100} width={100} alt="logo" />
      </a>
   
    </div>
    <ul className="nav-links">
    <li><a className='linea'  href="#Details">SIRIUS Club</a></li>
      <li><a className='linea'  href="#Details">Previous Events</a></li>
      <li><a className='linea'  href="#Details">SIRIUS 101</a></li>
      <li><a className='linea'  href="#Details">Sponsors</a></li>

   
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