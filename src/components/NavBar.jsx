import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
    <div className="logo" draggable="false">
    <Image src={"/logo-full.png"} className="" height={80} width={80} alt="" />

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