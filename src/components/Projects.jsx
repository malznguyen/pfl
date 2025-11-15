const projectsData = [
  {
    number: '01',
    title: 'Neural Shredder',
    category: 'Deep Learning',
    description:
      'A deep learning model that generates guitar solos in the style of rock legends. Trained on thousands of hours of classic rock.',
    tags: ['PyTorch', 'TensorFlow', 'MIDI'],
    featured: true,
  },
  {
    number: '02',
    title: 'Thunderstruck AI',
    category: 'Computer Vision',
    description:
      'Computer vision system that detects and classifies guitar techniques in real-time video. Perfect for online guitar lessons.',
    tags: ['OpenCV', 'YOLO', 'Python'],
    featured: false,
  },
  {
    number: '03',
    title: 'Highway to LLMs',
    category: 'Natural Language',
    description:
      "Fine-tuned language model specialized in music theory and rock history. It writes song lyrics like a pro!",
    tags: ['Transformers', 'GPT', 'NLP'],
    featured: false,
  },
  {
    number: '04',
    title: 'Back in Black Box',
    category: 'Explainable AI',
    description:
      'Explainable AI framework that makes neural network decisions as clear as a power chord. No more mystery in ML!',
    tags: ['SHAP', 'LIME', 'XAI'],
    featured: true,
  },
  {
    number: '05',
    title: "Hell's Bells Predictor",
    category: 'Time Series',
    description:
      'Time series forecasting model that predicts concert attendance and merch sales. Rock economics meets data science!',
    tags: ['Prophet', 'LSTM', 'Pandas'],
    featured: false,
  },
  {
    number: '06',
    title: 'TNT Transformer',
    category: 'Generative AI',
    description:
      "State-of-the-art transformer architecture optimized for music generation and analysis. It's dynamite!",
    tags: ['BERT', 'Attention', 'JAX'],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-ink text-cream">
      {/* Section Number */}
      <div className="absolute right-6 md:right-12 top-24 md:top-32">
        <span className="font-display text-8xl md:text-9xl font-extrabold text-cream/[0.03]">
          03
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs tracking-[0.3em] text-cream/50 uppercase">
              Selected Work
            </span>
            <div className="h-px bg-cream/20 flex-1 max-w-[100px]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-cream leading-none">
            PROJECTS
          </h2>
        </div>

        {/* Projects Grid - Magazine Layout */}
        <div className="grid md:grid-cols-2 gap-px bg-cream/10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-ink p-8 md:p-12 hover-lift ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'md:grid md:grid-cols-2 md:gap-12' : ''}`}>
                {/* Project Number */}
                <div className="mb-6 md:mb-8">
                  <span className="font-mono text-xs tracking-[0.3em] text-cream/30">
                    {project.number}
                  </span>
                </div>

                <div>
                  {/* Category */}
                  <span className="font-mono text-xs tracking-wider text-electric uppercase mb-4 block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-cream mb-4 group-hover:text-electric transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-serif text-base md:text-lg text-cream/70 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-mono text-xs tracking-wider text-cream/50 border border-cream/20 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {project.featured && (
                  <div className="hidden md:flex items-end justify-end">
                    <span className="font-display text-[8rem] leading-none text-cream/[0.05] font-extrabold">
                      ★
                    </span>
                  </div>
                )}
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/malznguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-display text-sm tracking-wider text-cream/70 hover:text-electric transition-colors underline-expand"
          >
            VIEW ALL ON GITHUB
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
