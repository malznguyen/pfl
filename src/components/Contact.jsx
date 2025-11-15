const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      handle: '@malznguyen',
      url: 'https://github.com/malznguyen',
    },
    {
      name: 'LinkedIn',
      handle: 'in/nguyenha',
      url: 'https://linkedin.com/in/nguyenha',
    },
    {
      name: 'Instagram',
      handle: '@malznguyen12',
      url: 'https://instagram.com/malznguyen12',
    },
    {
      name: 'Email',
      handle: 'malz28122003@gmail.com',
      url: 'mailto:malz28122003@gmail.com',
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-electric text-cream">
      {/* Section Number */}
      <div className="absolute right-6 md:right-12 top-24 md:top-32">
        <span className="font-display text-8xl md:text-9xl font-extrabold text-cream/[0.1]">
          05
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] text-cream/70 uppercase">
              Get in Touch
            </span>
            <div className="h-px bg-cream/30 flex-1 max-w-[100px]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-cream leading-none">
            CONTACT
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Big Statement */}
          <div>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-cream/90">
              Let's collaborate on your next
              <span className="font-display font-bold"> AI project </span>
              or just talk about
              <span className="italic"> rock music.</span>
            </p>

            <div className="mt-12">
              <a
                href="mailto:malz28122003@gmail.com?subject=Let's%20collaborate&body=Hi%20Nguyen,%20I%20saw%20your%20portfolio..."
                className="group inline-flex items-center gap-4 bg-cream text-electric px-10 py-5 font-display text-lg tracking-wider hover:bg-ink hover:text-cream transition-all duration-300"
              >
                SEND EMAIL
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Social Links */}
          <div>
            <h3 className="font-display text-xl tracking-wide text-cream uppercase mb-8">
              Connect
            </h3>
            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex items-center justify-between py-4 border-b border-cream/20 hover:border-cream transition-colors"
                >
                  <div>
                    <span className="font-display text-lg text-cream block group-hover:translate-x-2 transition-transform">
                      {link.name}
                    </span>
                    <span className="font-mono text-xs tracking-wider text-cream/60">
                      {link.handle}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-cream/50 group-hover:text-cream transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-24 pt-12 border-t border-cream/20 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-cream/50 uppercase">
            Open to opportunities worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
