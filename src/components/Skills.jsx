const Skills = () => {
  const coreSkills = [
    { name: 'Python', proficiency: 95 },
    { name: 'TensorFlow / PyTorch', proficiency: 90 },
    { name: 'Computer Vision', proficiency: 85 },
    { name: 'NLP / LLMs', proficiency: 85 },
    { name: 'Deep Learning', proficiency: 92 },
    { name: 'MLOps', proficiency: 80 },
  ];

  const technologies = [
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'OpenCV',
    'Hugging Face',
    'AWS',
    'GCP',
    'Docker',
    'Kubernetes',
    'Git',
    'SQL',
    'FastAPI',
    'Flask',
    'React',
    'Node.js',
  ];

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
      {/* Section Number */}
      <div className="absolute left-6 md:left-12 top-24 md:top-32">
        <span className="font-display text-8xl md:text-9xl font-extrabold text-ink/[0.03]">
          04
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
              Expertise
            </span>
            <div className="h-px bg-ink/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-ink leading-none">
            SKILLS
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Core Skills with Progress */}
          <div>
            <h3 className="font-display text-xl tracking-wide text-electric uppercase mb-8">
              Core Competencies
            </h3>
            <div className="space-y-8">
              {coreSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="font-serif text-lg text-ink">{skill.name}</span>
                    <span className="font-mono text-xs tracking-wider text-muted">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="relative h-1 bg-ink/10 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-ink group-hover:bg-electric transition-colors duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Cloud */}
          <div>
            <h3 className="font-display text-xl tracking-wide text-electric uppercase mb-8">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="font-mono text-sm tracking-wide text-ink/70 border border-ink/20 px-4 py-2 hover:bg-ink hover:text-cream hover:border-ink transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Philosophy Quote */}
            <div className="mt-12 pt-8 border-t border-ink/10">
              <p className="font-serif text-lg italic text-ink/70 leading-relaxed">
                "The intersection of artificial intelligence and creative expression is where
                innovation truly rocks."
              </p>
              <span className="font-mono text-xs tracking-wider text-muted block mt-4">
                — Personal Philosophy
              </span>
            </div>
          </div>
        </div>

        {/* Large Statement */}
        <div className="mt-24 pt-12 border-t border-ink/10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-ink leading-tight">
                Building intelligent systems that learn, adapt, and create.
              </p>
            </div>
            <div className="flex items-end">
              <span className="font-mono text-xs tracking-wider text-muted">
                CONTINUOUS LEARNING
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
