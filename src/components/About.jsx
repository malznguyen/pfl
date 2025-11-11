const About = () => {
  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 sm:p-8 md:p-10 lg:p-12 border-2 sm:border-4 border-red-600 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 text-red-500 neon">
            BACKSTAGE PASS
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div>
              <h3 className="font-['Oswald'] text-xl sm:text-2xl mb-3 sm:mb-4 text-white">THE ENGINEER</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                I'm an AI Engineer who believes that machine learning models are like guitar
                solos - they need the right architecture, perfect timing, and a touch of
                creative chaos to truly shine.
              </p>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                My days are spent training neural networks, optimizing algorithms, and pushing
                the boundaries of what's possible with artificial intelligence. Think of me as a
                roadie for robots - I make sure the AI performs flawlessly when it hits the
                stage.
              </p>
            </div>

            <div>
              <h3 className="font-['Oswald'] text-xl sm:text-2xl mb-3 sm:mb-4 text-white">THE ROCKER</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                When I'm not debugging code, you'll find me shredding on my guitar, channeling
                the spirit of Angus Young. AC/DC isn't just music to me - it's a philosophy.
                High voltage energy, thunderstruck innovation, and a highway to computational
                hell.
              </p>
              <div className="flex space-x-3 sm:space-x-4 mt-6 sm:mt-8">
                <div className="knob w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                  <span className="text-xs text-red-400 font-bold mt-6 sm:mt-8">GAIN</span>
                </div>
                <div className="knob w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                  <span className="text-xs text-red-400 font-bold mt-6 sm:mt-8">BASS</span>
                </div>
                <div className="knob w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                  <span className="text-xs text-red-400 font-bold mt-6 sm:mt-8">TREBLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
