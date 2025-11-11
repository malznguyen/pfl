import React from 'react';

const Navigation = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 border-b-4 border-red-600 shadow-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo as Amp Knob */}
            <div className="knob w-12 h-12 rounded-full animate-pulse"></div>
            <h1 className="font-['Bebas_Neue'] text-2xl tracking-wider">
              <span className="text-red-500">NGUYEN</span>{' '}
              <span className="text-white">HA</span>
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="rock-hover hover:text-red-500 transition-all hover:scale-110 font-['Oswald'] tracking-wide"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="rock-hover hover:text-red-500 transition-all hover:scale-110 font-['Oswald'] tracking-wide"
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, '#skills')}
              className="rock-hover hover:text-red-500 transition-all hover:scale-110 font-['Oswald'] tracking-wide"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="rock-hover hover:text-red-500 transition-all hover:scale-110 font-['Oswald'] tracking-wide"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
