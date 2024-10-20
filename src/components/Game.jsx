"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const Game = ({ keyParam, value }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for screen width to determine if it's mobile resolution
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px is typically the breakpoint for mobile devices
    };

    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  // Define styles based on the value
  const getClassName = () => {
    return value === 0
      ? "spline-card z-0 flex-col-reverse w-[100%] h-[265px] md:h-auto md:w-full bg-white border-4 rounded flex items-center justify-center transition duration-300"
      : "z-0 flex-col-reverse cursor-default w-[100%] h-[265px] md:h-auto md:w-full bg-gray-300 border-4 rounded flex items-center justify-center opacity-70";
  };

  // Define the href conditionally
  const getHref = () => {
    return value === 0 ? "/game" : "#";
  };

  return (
    <a draggable='false' href={getHref()} onClick={value !== 0 ? (e) => e.preventDefault() : undefined}>
      <div id="start" className={getClassName()}>
        <div className="play"
          style={{ 
            textDecoration: value !== 0 ? "line-through" : "none",
            fontWeight: value !== 0 ? "normal" : "bold"
          }}
        >
          {value === 0 ? "Play" : "Closed"}
        </div>

        {/* Conditional rendering: Show image on mobile, Spline Viewer on larger screens */}
        {isMobile ? (
        <Image
        alt="Sirius"
        src={'/sirius.png'}
        height={50}
        width={325}
        ></Image>
        ) : (
          <spline-viewer
            url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode"
            className="z-0"
            camera-controls="zoom: false"
          ></spline-viewer>
        )}
      </div>
    </a>
  );
};

export default Game;
