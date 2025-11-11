const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t-4 border-red-600 py-8">
      <div className="container mx-auto text-center">
        <p className="font-['Bebas_Neue'] text-2xl text-red-500 mb-2">
          NGUYEN HA - WORLD TOUR {currentYear}
        </p>
        <p className="font-['Oswald'] text-gray-400">
          For Those About to Code... We Salute You! 🤘
        </p>
        <p className="text-xs text-gray-600 mt-4">
          © {currentYear} Nguyen Ha. All Rights Reserved. No AI was harmed in the making of
          this portfolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
