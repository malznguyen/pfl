import React from 'react';

const IntroOverlay = ({ show, onEnter }) => {
  return (
    <div
      id="intro-overlay"
      className={`fixed top-0 left-0 w-full h-full bg-black z-[10000] flex items-center justify-center transition-opacity duration-1000 ${
        !show ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Animated red glow background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full filter blur-[200px] animate-pulse opacity-40"></div>
        </div>

        {/* ROCK IN as the button */}
        <button
          onClick={onEnter}
          className="relative group cursor-pointer transform transition-all duration-300 hover:scale-110"
        >
          <h1 className="font-['Bebas_Neue'] text-[12rem] md:text-[18rem] lg:text-[20rem] text-white fire-text tracking-wider">
            ROCK IN!
          </h1>
          {/* Subtle hint text below */}
          <p className="font-['Oswald'] text-xl md:text-2xl text-red-400 mt-4 opacity-70 group-hover:opacity-100 transition-opacity text-center">
            CLICK TO UNLEASH THE THUNDER
          </p>
        </button>
      </div>
    </div>
  );
};

export default IntroOverlay;
