import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-12 border-4 border-red-600 shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <h2 className="font-['Bebas_Neue'] text-6xl mb-8 text-red-500 neon">
            BACKSTAGE PASS
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-['Oswald'] text-2xl mb-4 text-white">THE ENGINEER</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm an AI Engineer who believes that machine learning models are like guitar
                solos - they need the right architecture, perfect timing, and a touch of
                creative chaos to truly shine.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My days are spent training neural networks, optimizing algorithms, and pushing
                the boundaries of what's possible with artificial intelligence. Think of me as a
                roadie for robots - I make sure the AI performs flawlessly when it hits the
                stage.
              </p>
            </div>

            <div>
              <h3 className="font-['Oswald'] text-2xl mb-4 text-white">THE ROCKER</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When I'm not debugging code, you'll find me shredding on my guitar, channeling
                the spirit of Angus Young. AC/DC isn't just music to me - it's a philosophy.
                High voltage energy, thunderstruck innovation, and a highway to computational
                hell.
              </p>
              <div className="flex space-x-4 mt-8">
                <div className="knob w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-xs text-red-400 font-bold mt-8">GAIN</span>
                </div>
                <div className="knob w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-xs text-red-400 font-bold mt-8">BASS</span>
                </div>
                <div className="knob w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="text-xs text-red-400 font-bold mt-8">TREBLE</span>
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
