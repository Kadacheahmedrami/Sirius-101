import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
    <div className="logo" draggable="false">
<<<<<<< HEAD
    <Image src={"/logo-full.png"} className="" height={90} width={90} alt="" />

=======
    <Image src={"/logo.svg"} className="" height={48} width={48} alt="logo" />
    <Image src={"/SIRIUS.svg"} className="" height={80} width={80} alt="logo1" />
>>>>>>> 8e273b54bf7c61642f58ad12962944af3a427be8
    </div>
    <ul className="nav-links">
      <li><a href="#">About Sirius</a></li>
      <li><a href="#">Game details</a></li>
      <li><a href="#">Hints</a></li>
      <div>
        <button className="button">I found item</button>
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