import PropTypes from 'prop-types';

const IntroOverlay = ({ show, onEnter }) => {
  return (
    <div
      id="intro-overlay"
      className={`fixed top-0 left-0 w-full h-full bg-black z-[10000] flex items-center justify-center transition-opacity duration-1000 ${
        !show ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center px-4">
        {/* Animated red glow background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-red-600 rounded-full filter blur-[100px] sm:blur-[150px] md:blur-[200px] animate-pulse opacity-40"></div>
        </div>

        {/* ROCK IN as the button */}
        <button
          onClick={onEnter}
          className="relative group cursor-pointer transform transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Enter site"
        >
          <h1 className="font-['Bebas_Neue'] text-[4rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] text-white fire-text tracking-wider leading-none">
            ROCK IN!
          </h1>
          {/* Subtle hint text below */}
          <p className="font-['Oswald'] text-sm sm:text-base md:text-xl lg:text-2xl text-red-400 mt-2 sm:mt-4 opacity-70 group-hover:opacity-100 transition-opacity text-center px-2">
            <span className="hidden sm:inline">CLICK TO UNLEASH THE THUNDER</span>
            <span className="inline sm:hidden">TAP TO ENTER</span>
          </p>
        </button>
      </div>
    </div>
  );
};

IntroOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
};

export default IntroOverlay;
