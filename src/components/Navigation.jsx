import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="font-display text-xl tracking-wider text-ink">
            <span className="font-extrabold">NH</span>
            <span className="text-electric">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-electric transition-colors uppercase underline-expand"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-electric transition-colors uppercase underline-expand"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, '#skills')}
              className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-electric transition-colors uppercase underline-expand"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-electric transition-colors uppercase underline-expand"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-ink hover:text-electric transition-colors p-2"
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
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-6 pt-8 pb-4">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-electric transition-colors uppercase"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-electric transition-colors uppercase"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, '#skills')}
              className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-electric transition-colors uppercase"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="font-mono text-xs tracking-[0.2em] text-ink/70 hover:text-electric transition-colors uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
