import PropTypes from 'prop-types';

const MusicControl = ({ isPlaying, onToggle }) => {
  return (
    <div
      id="music-control"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-[9999]"
    >
      <button
        onClick={onToggle}
        className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-['Oswald'] text-sm sm:text-base md:text-lg shadow-2xl transform hover:scale-110 active:scale-95 transition-all flex items-center min-h-[44px] min-w-[44px]"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        <i className={`fas ${isPlaying ? 'fa-volume-up' : 'fa-play'} mr-1.5 sm:mr-2`}></i>
        <span className="hidden xs:inline sm:inline">{isPlaying ? 'MUSIC ON' : 'PLAY MUSIC'}</span>
      </button>
    </div>
  );
};

MusicControl.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MusicControl;
