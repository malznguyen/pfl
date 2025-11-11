const projectsData = [
  {
    icon: 'fa-brain',
    title: 'NEURAL SHREDDER',
    description:
      'A deep learning model that generates guitar solos in the style of rock legends. Trained on thousands of hours of classic rock.',
    tags: ['PyTorch', 'TensorFlow', 'MIDI'],
  },
  {
    icon: 'fa-robot',
    title: 'THUNDERSTRUCK AI',
    description:
      'Computer vision system that detects and classifies guitar techniques in real-time video. Perfect for online guitar lessons.',
    tags: ['OpenCV', 'YOLO', 'Python'],
  },
  {
    icon: 'fa-microchip',
    title: 'HIGHWAY TO LLMS',
    description:
      "Fine-tuned language model specialized in music theory and rock history. It writes song lyrics like a pro!",
    tags: ['Transformers', 'GPT', 'NLP'],
  },
  {
    icon: 'fa-wave-square',
    title: 'BACK IN BLACK BOX',
    description:
      'Explainable AI framework that makes neural network decisions as clear as a power chord. No more mystery in ML!',
    tags: ['SHAP', 'LIME', 'XAI'],
  },
  {
    icon: 'fa-chart-line',
    title: "HELL'S BELLS PREDICTOR",
    description:
      'Time series forecasting model that predicts concert attendance and merch sales. Rock economics meets data science!',
    tags: ['Prophet', 'LSTM', 'Pandas'],
  },
  {
    icon: 'fa-network-wired',
    title: 'TNT TRANSFORMER',
    description:
      "State-of-the-art transformer architecture optimized for music generation and analysis. It's dynamite!",
    tags: ['BERT', 'Attention', 'JAX'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-['Bebas_Neue'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-8 sm:mb-12 md:mb-16 text-white">
          <span className="glitch-text">GREATEST HITS</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black border-2 sm:border-4 border-zinc-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 ${
                index % 2 === 0 ? 'hover:-rotate-2' : 'hover:rotate-2'
              }`}
            >
              <div className="p-5 sm:p-6 md:p-8">
                <div className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl text-red-500">
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <h3 className="font-['Oswald'] text-xl sm:text-2xl mb-2 sm:mb-3 text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-red-900 px-2 sm:px-3 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
