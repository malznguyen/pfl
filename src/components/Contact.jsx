const Contact = () => {
  const composeEmail = () => {
    window.location.href =
      "mailto:malz28122003@gmail.com?subject=Let's Rock Together!&body=Hey Nguyen, I saw your portfolio and...";
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fa-github',
      url: 'https://github.com/malznguyen',
      brand: true,
    },
    {
      name: 'LinkedIn',
      icon: 'fa-linkedin',
      url: 'https://linkedin.com/in/nguyenha',
      brand: true,
    },
    {
      name: 'Email',
      icon: 'fa-envelope',
      url: 'mailto:malz28122003@gmail.com',
      brand: false,
    },
    {
      name: 'Instagram',
      icon: 'fa-instagram',
      url: 'https://instagram.com/malznguyen12',
      brand: true,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-['Bebas_Neue'] text-7xl text-center mb-16 text-white">
          <span className="glitch-text">GET BACKSTAGE</span>
        </h2>

        <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-12 border-8 border-double border-white transform -rotate-2 hover:rotate-0 transition-transform">
          <div className="text-center mb-8">
            <p className="font-['Oswald'] text-xl text-white mb-2">VIP ACCESS</p>
            <p className="text-gray-200">Book me for your next gig (or ML project)</p>
          </div>

          <div className="flex justify-center space-x-8 mb-12 flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group"
              >
                <div className="bg-black p-6 rounded-full border-4 border-white transform transition-all hover:scale-110 hover:border-red-500">
                  <i
                    className={`${link.brand ? 'fab' : 'fas'} ${link.icon} text-4xl text-white group-hover:text-red-500`}
                  ></i>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={composeEmail}
              className="bg-black hover:bg-zinc-900 text-white px-12 py-4 font-['Oswald'] text-xl tracking-wider border-4 border-white hover:border-red-500 transform hover:scale-110 transition-all"
            >
              <i className="fas fa-envelope mr-3"></i>
              DROP ME A LINE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
