const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section Number */}
      <div className="absolute left-6 md:left-12 top-24 md:top-32">
        <span className="font-display text-8xl md:text-9xl font-extrabold text-ink/[0.03]">
          02
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
              About
            </span>
            <div className="h-px bg-ink/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-ink leading-none">
            THE STORY
          </h2>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left Column - Large Text */}
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-ink/90 italic">
              "I believe that machine learning models are like guitar solos—they need the right architecture, perfect timing, and a touch of creative chaos."
            </p>
            <div className="mt-8 pt-8 border-t border-ink/10">
              <span className="font-mono text-xs tracking-wider text-muted block mb-2">CURRENTLY</span>
              <span className="font-display text-lg">AI Engineer @ Building the Future</span>
            </div>
          </div>

          {/* Right Column - Body Text */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-xl tracking-wide text-electric uppercase">
                The Engineer
              </h3>
              <p className="font-serif text-lg leading-relaxed text-ink/80">
                My days are spent training neural networks, optimizing algorithms, and pushing
                the boundaries of what's possible with artificial intelligence. I specialize in
                deep learning architectures, computer vision systems, and natural language
                processing. Think of me as a conductor for machines—orchestrating complex
                computations into elegant solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-xl tracking-wide text-electric uppercase">
                The Enthusiast
              </h3>
              <p className="font-serif text-lg leading-relaxed text-ink/80">
                When I'm not debugging code, you'll find me channeling the spirit of Angus Young.
                AC/DC isn't just music to me—it's a philosophy. High voltage energy, thunderstruck
                innovation, and a highway to computational excellence. The same passion that drives
                a perfect guitar riff drives my pursuit of elegant code.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink/10">
              <div>
                <span className="font-display text-3xl md:text-4xl font-extrabold text-ink block">5+</span>
                <span className="font-mono text-xs tracking-wider text-muted uppercase">Years Exp</span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl font-extrabold text-ink block">50+</span>
                <span className="font-mono text-xs tracking-wider text-muted uppercase">Projects</span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl font-extrabold text-ink block">∞</span>
                <span className="font-mono text-xs tracking-wider text-muted uppercase">Passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
