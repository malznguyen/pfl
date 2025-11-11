const Skills = () => {
  const openingAct = [
    { name: 'Python', level: 5 },
    { name: 'TensorFlow/PyTorch', level: 5 },
    { name: 'Computer Vision', level: 4 },
    { name: 'NLP/LLMs', level: 4 },
  ];

  const mainEvent = [
    { name: 'Deep Learning', level: 5 },
    { name: 'MLOps', level: 4 },
    { name: 'Docker/Kubernetes', level: 3 },
    { name: 'Guitar Shredding', level: 5 },
  ];

  const encore = [
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'AWS/GCP',
    'Git',
    'SQL',
    'FastAPI',
    'AC/DC Riffs',
  ];

  const renderBolts = (level) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={`fas fa-bolt ${index < level ? 'text-red-500' : 'text-gray-600'}`}
      ></i>
    ));
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>

      <div className="relative container mx-auto max-w-6xl">
        <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-8 sm:mb-12 md:mb-16 text-red-500 neon">
          TOUR SETLIST
        </h2>

        <div className="bg-zinc-900 border-2 sm:border-4 border-red-600 p-6 sm:p-8 md:p-10 lg:p-12 transform rotate-1 hover:rotate-0 transition-transform">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Opening Act - Core Skills */}
            <div>
              <h3 className="font-['Oswald'] text-2xl sm:text-3xl mb-4 sm:mb-6 text-white">OPENING ACT</h3>
              <div className="space-y-3 sm:space-y-4">
                {openingAct.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 sm:p-3 bg-black border-l-2 sm:border-l-4 border-red-600"
                  >
                    <span className="font-['Oswald'] text-sm sm:text-base">{skill.name}</span>
                    <div className="flex space-x-1 text-sm sm:text-base">{renderBolts(skill.level)}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Event - Advanced Skills */}
            <div>
              <h3 className="font-['Oswald'] text-2xl sm:text-3xl mb-4 sm:mb-6 text-white">MAIN EVENT</h3>
              <div className="space-y-3 sm:space-y-4">
                {mainEvent.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 sm:p-3 bg-black border-l-2 sm:border-l-4 border-red-600"
                  >
                    <span className="font-['Oswald'] text-sm sm:text-base">{skill.name}</span>
                    <div className="flex space-x-1 text-sm sm:text-base">{renderBolts(skill.level)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Encore */}
          <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t-2 border-red-600">
            <h3 className="font-['Oswald'] text-xl sm:text-2xl mb-3 sm:mb-4 text-center text-red-500">
              ENCORE PERFORMANCE
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm">
              {encore.map((item, index) => (
                <span key={index} className="bg-black px-3 sm:px-4 py-1.5 sm:py-2 border border-red-600">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
