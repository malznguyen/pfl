const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 border-t-2 sm:border-t-4 border-red-600 py-6 sm:py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="font-['Bebas_Neue'] text-lg sm:text-xl md:text-2xl text-red-500 mb-1 sm:mb-2">
          NGUYEN HA - WORLD TOUR {currentYear}
        </p>
        <p className="font-['Oswald'] text-sm sm:text-base text-gray-400 px-2">
          For Those About to Code... We Salute You! 🤘
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 px-2">
          © {currentYear} Nguyen Ha. All Rights Reserved. No AI was harmed in the making of
          this portfolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
