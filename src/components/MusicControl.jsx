import PropTypes from 'prop-types';

const MusicControl = ({ isPlaying, onToggle }) => {
  return (
    <div
      id="music-control"
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <button
        onClick={onToggle}
        className="group flex items-center gap-2 bg-ink text-cream px-4 py-3 font-mono text-xs tracking-wider hover:bg-electric transition-all duration-300"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <>
            <span className="w-2 h-2 bg-electric rounded-full animate-pulse group-hover:bg-cream" />
            <span className="hidden sm:inline">SOUND ON</span>
          </>
        ) : (
          <>
            <span className="w-2 h-2 bg-cream/50 rounded-full group-hover:bg-cream" />
            <span className="hidden sm:inline">SOUND OFF</span>
          </>
        )}
      </button>
    </div>
  );
};

MusicControl.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MusicControl;
