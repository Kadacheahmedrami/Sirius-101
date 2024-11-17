import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
    <div className="logo mx-auto md:mx-0"  draggable="false">
      <a href='/wlcm' className='flex justify-center items-center gap-2'>
      <Image src={"/logo101.svg"} className="" height={150} width={150} alt="logo" />
      </a>
   
    </div>
    <ul className="nav-links">
    <li><a className='linea'  href="#Details">SIRIUS Club</a></li>
      <li><a className='linea'  href="#prev">Previous Events</a></li>
      <li><a className='linea'  href="#101">SIRIUS 101</a></li>
      <li><a className='linea'  href="#spon">Sponsors</a></li>

   
    </ul>
 
  </nav>
  )
}

export default NavBar