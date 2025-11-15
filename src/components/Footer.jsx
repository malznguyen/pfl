const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <span className="font-display text-4xl font-extrabold text-cream block mb-4">
              NH<span className="text-electric">.</span>
            </span>
            <p className="font-serif text-cream/60 text-sm leading-relaxed">
              AI Engineer & Rock Enthusiast building intelligent systems that resonate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-cream/50 uppercase block mb-4">
              Navigation
            </span>
            <div className="space-y-3">
              <a href="#about" className="block font-serif text-cream/70 hover:text-electric transition-colors">
                About
              </a>
              <a href="#projects" className="block font-serif text-cream/70 hover:text-electric transition-colors">
                Projects
              </a>
              <a href="#skills" className="block font-serif text-cream/70 hover:text-electric transition-colors">
                Skills
              </a>
              <a href="#contact" className="block font-serif text-cream/70 hover:text-electric transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-cream/50 uppercase block mb-4">
              Contact
            </span>
            <div className="space-y-3">
              <a
                href="mailto:malz28122003@gmail.com"
                className="block font-mono text-xs text-cream/70 hover:text-electric transition-colors"
              >
                malz28122003@gmail.com
              </a>
              <a
                href="https://github.com/malznguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-xs text-cream/70 hover:text-electric transition-colors"
              >
                github.com/malznguyen
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs tracking-wider text-cream/40">
            © {currentYear} Nguyen Ha. All rights reserved.
          </p>
          <p className="font-mono text-xs tracking-wider text-cream/40">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
