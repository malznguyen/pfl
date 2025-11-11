import { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 border-b-4 border-red-600 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Logo as Amp Knob */}
            <div className="knob w-10 h-10 sm:w-12 sm:h-12 rounded-full animate-pulse"></div>
            <h1 className="font-['Bebas_Neue'] text-xl sm:text-2xl tracking-wider">
              <span className="text-red-500">NGUYEN</span>{' '}
              <span className="text-white">HA</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="rock-hover hover:text-red-500 transition-all hover:scale-110 font-['Oswald'] tracking-wide text-sm lg:text-base"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="rock-hover hover:text-red-500 transition-all hover:scale-110 font-['Oswald'] tracking-wide text-sm lg:text-base"
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, '#skills')}
              className="rock-hover hover:text-red-500 transition-all hover:scale-110 font-['Oswald'] tracking-wide text-sm lg:text-base"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="rock-hover hover:text-red-500 transition-all hover:scale-110 font-['Oswald'] tracking-wide text-sm lg:text-base"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-red-500 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 pb-2">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="rock-hover hover:text-red-500 transition-all font-['Oswald'] tracking-wide text-center py-2 hover:bg-zinc-800 rounded"
            >
              ABOUT
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="rock-hover hover:text-red-500 transition-all font-['Oswald'] tracking-wide text-center py-2 hover:bg-zinc-800 rounded"
            >
              PROJECTS
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, '#skills')}
              className="rock-hover hover:text-red-500 transition-all font-['Oswald'] tracking-wide text-center py-2 hover:bg-zinc-800 rounded"
            >
              SKILLS
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="rock-hover hover:text-red-500 transition-all font-['Oswald'] tracking-wide text-center py-2 hover:bg-zinc-800 rounded"
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
