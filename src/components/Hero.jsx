const Hero = () => {
  const triggerLightning = () => {
    const lightning = document.getElementById('lightning');
    if (lightning) {
      lightning.classList.add('flash');
      document.body.classList.add('shake');
      document.body.style.filter = 'brightness(1.5)';

      setTimeout(() => {
        lightning.classList.remove('flash');
        document.body.classList.remove('shake');
        document.body.style.filter = 'brightness(1)';
      }, 500);
    }
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const gridPattern = "data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,0,0,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)' /%3E%3C/svg%3E";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div
          className="absolute inset-0 opacity-50"
          style={{ backgroundImage: `url("${gridPattern}")` }}
        ></div>
      </div>

      {/* Guitar Strings Background */}
      <div className="absolute inset-0 flex flex-col justify-center space-y-20 opacity-20">
        <div className="string"></div>
        <div className="string" style={{ animationDelay: '0.05s' }}></div>
        <div className="string" style={{ animationDelay: '0.1s' }}></div>
        <div className="string" style={{ animationDelay: '0.15s' }}></div>
        <div className="string" style={{ animationDelay: '0.2s' }}></div>
        <div className="string" style={{ animationDelay: '0.25s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* Main Title - Concert Poster Style */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-['Bebas_Neue'] text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] leading-none">
            <span className="block text-red-600 neon glitch-text">AI ENGINEER</span>
            <span className="block text-white text-4xl sm:text-6xl md:text-7xl mt-2 sm:mt-4">×</span>
            <span className="block text-white text-4xl sm:text-6xl md:text-8xl mt-2 sm:mt-4 hover:text-red-500 transition-all">
              ROCK ENTHUSIAST
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-['Oswald'] text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 sm:mb-8 tracking-wide sm:tracking-widest px-2">
          NEURAL NETWORKS BY DAY • POWER CHORDS BY NIGHT
        </p>

        {/* CTA Buttons as Amp Switches */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 lg:gap-6">
          <button
            onClick={triggerLightning}
            className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-['Oswald'] text-sm sm:text-base lg:text-lg tracking-wider border-2 sm:border-4 border-red-800 shadow-2xl transform hover:scale-110 transition-all hover:shadow-red-600/50 hover:shadow-2xl"
          >
            <i className="fas fa-bolt mr-1 sm:mr-2"></i>
            <span className="hidden sm:inline">UNLEASH THE THUNDER</span>
            <span className="inline sm:hidden">THUNDER</span>
          </button>
          <a
            href="#projects"
            onClick={(e) => scrollToSection(e, '#projects')}
            className="bg-zinc-800 hover:bg-zinc-700 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-['Oswald'] text-sm sm:text-base lg:text-lg tracking-wider border-2 sm:border-4 border-zinc-900 shadow-2xl transform hover:scale-110 transition-all inline-block"
          >
            <i className="fas fa-guitar mr-1 sm:mr-2"></i>
            SEE MY WORK
          </a>
        </div>

        {/* Vinyl Record Decoration */}
        <div className="hidden sm:block absolute -bottom-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 opacity-20">
          <div className="vinyl w-full h-full rounded-full bg-gradient-to-r from-zinc-900 to-zinc-700 border-4 sm:border-8 border-zinc-800">
            <div className="absolute inset-6 sm:inset-8 rounded-full bg-red-600"></div>
            <div className="absolute inset-8 sm:inset-12 rounded-full bg-zinc-900"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
