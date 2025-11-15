import PropTypes from 'prop-types';

const IntroOverlay = ({ show, onEnter }) => {
  return (
    <div
      id="intro-overlay"
      className={`fixed inset-0 bg-ink z-[10000] flex items-center justify-center transition-all duration-1000 ${
        !show ? 'opacity-0 invisible pointer-events-none' : 'opacity-100 visible'
      }`}
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
        {/* Background Grid */}
        <div className="absolute inset-0 dot-grid opacity-10" />

        {/* Main Content */}
        <div className="relative text-center">
          {/* Pre-title */}
          <div className="mb-8">
            <span className="font-mono text-xs tracking-[0.3em] text-cream/50 uppercase">
              Portfolio 2024
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extrabold text-cream leading-none mb-8">
            NGUYEN
            <br />
            <span className="text-electric">HA</span>
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-lg md:text-xl text-cream/60 mb-12 max-w-md mx-auto">
            AI Engineer & Rock Enthusiast
          </p>

          {/* Enter Button */}
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center gap-4 bg-cream text-ink px-12 py-5 font-display text-lg tracking-wider hover:bg-electric hover:text-cream transition-all duration-500"
            aria-label="Enter site"
          >
            ENTER
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Hint */}
          <p className="font-mono text-xs tracking-wider text-cream/30 mt-8">
            CLICK TO CONTINUE
          </p>
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-cream/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-cream/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-cream/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-cream/20" />
      </div>
    </div>
  );
};

IntroOverlay.propTypes = {
  show: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
};

export default IntroOverlay;
