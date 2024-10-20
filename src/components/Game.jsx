import React from 'react';

const Game = () => {
  return (
    <a href="/game">
 <div id="start" className="spline-card z-0 flex-col-reverse w-[100%] h-[500px] md:h-auto md:w-full bg-white border-4 rounded flex items-center justify-center">
      <div className="play">Play</div>
      
      {/* Spline Viewer */}
      <spline-viewer 
        url="https://prod.spline.design/8iXD8T1UPl8mwj9i/scene.splinecode" 
        className="z-0" 
        camera-controls="zoom: false">
      </spline-viewer>
    </div>
    </a>
   
  );
};

export default Game;
