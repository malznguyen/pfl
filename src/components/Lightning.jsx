import { useEffect, useState } from 'react';

const Lightning = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    // Random lightning strikes
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        triggerFlash();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const triggerFlash = () => {
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
    }, 200);
  };

  return (
    <div
      id="lightning"
      className={`lightning fixed top-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-0 pointer-events-none z-[9999] ${
        isFlashing ? 'flash' : ''
      }`}
    ></div>
  );
};

export default Lightning;
