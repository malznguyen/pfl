const Spotlights = () => {
  return (
    <>
      <div className="spotlight fixed top-[-50%] w-[200px] h-[150%] bg-gradient-to-b from-transparent via-red-500/10 to-transparent pointer-events-none left-[10%] spotlight-animation"></div>
      <div
        className="spotlight fixed top-[-50%] w-[200px] h-[150%] bg-gradient-to-b from-transparent via-red-500/10 to-transparent pointer-events-none left-[80%] spotlight-animation"
        style={{ animationDelay: '-2s' }}
      ></div>
    </>
  );
};

export default Spotlights;
