import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Add animate class after mount for staggered reveal
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('animate');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 lg:px-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-grid opacity-5" />

      {/* Main Content */}
      <div ref={heroRef} className="reveal-container relative z-10 flex-1 flex flex-col justify-center">
        {/* Top Label */}
        <div className="mb-8 md:mb-12">
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-muted uppercase">
            Portfolio / 2024
          </span>
        </div>

        {/* Main Typography Block */}
        <div className="max-w-7xl">
          <h1 className="font-display editorial-large text-ink mb-6">
            <span className="block">NGUYEN</span>
            <span className="block text-electric">HA</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
            <div className="md:max-w-md">
              <p className="font-serif text-lg md:text-xl leading-relaxed text-ink/80">
                AI Engineer crafting intelligent systems by day,
                <span className="italic"> shredding power chords</span> by night.
              </p>
            </div>

            <div className="flex-1">
              <div className="h-px bg-ink/20 w-full" />
            </div>

            <div className="font-mono text-xs tracking-wider text-muted">
              BASED IN VIETNAM
            </div>
          </div>
        </div>

        {/* Large Decorative Number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
          <span className="font-display text-[20rem] leading-none text-ink/[0.02] font-extrabold">
            01
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
          {/* Scroll Indicator */}
          <div className="flex items-center gap-4">
            <div className="w-px h-16 bg-ink/30" />
            <span className="font-mono text-xs tracking-wider text-muted vertical-text">
              SCROLL
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="group inline-flex items-center gap-3 bg-ink text-cream px-8 py-4 font-display text-sm tracking-wider hover:bg-electric transition-colors duration-300"
            >
              VIEW WORK
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-3 border-2 border-ink text-ink px-8 py-4 font-display text-sm tracking-wider hover:bg-ink hover:text-cream transition-all duration-300"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden border-t border-b border-ink/10 py-4">
          <div className="marquee whitespace-nowrap">
            <span className="inline-block font-display text-2xl md:text-3xl tracking-wide text-ink/10">
              ARTIFICIAL INTELLIGENCE • DEEP LEARNING • COMPUTER VISION • NLP • ROCK & ROLL • NEURAL NETWORKS • MACHINE LEARNING • AC/DC • PYTORCH • TENSORFLOW •
              ARTIFICIAL INTELLIGENCE • DEEP LEARNING • COMPUTER VISION • NLP • ROCK & ROLL • NEURAL NETWORKS • MACHINE LEARNING • AC/DC • PYTORCH • TENSORFLOW •
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
