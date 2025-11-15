import { useState, useEffect } from 'react';
import IntroOverlay from './components/IntroOverlay';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicControl from './components/MusicControl';
import './styles/animations.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/audio.mp3');
    audio.loop = true;
    // Set default volume to 50%
    audio.volume = 0.5;
    setAudioElement(audio);

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const handleEnterSite = () => {
    setShowIntro(false);
    
    // Try to play audio
    if (audioElement) {
      audioElement.play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((error) => {
          console.log('Audio autoplay prevented:', error);
          setIsMusicPlaying(false);
        });
    }

    // Trigger thunder shake effect
    setTimeout(() => {
      document.body.style.animation = 'thunderShake 0.5s';
      setTimeout(() => {
        document.body.style.animation = '';
      }, 500);
    }, 1000);
  };

  const toggleMusic = () => {
    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
        setIsMusicPlaying(false);
      } else {
        audioElement.play();
        setIsMusicPlaying(true);
      }
    }
  };

  return (
    <div className="bg-cream text-ink font-serif overflow-x-hidden">
      {/* Grain texture overlay */}
      <div className="grain" />

      <IntroOverlay show={showIntro} onEnter={handleEnterSite} />

      {!showIntro && (
        <>
          <MusicControl isPlaying={isMusicPlaying} onToggle={toggleMusic} />
          <Navigation />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
