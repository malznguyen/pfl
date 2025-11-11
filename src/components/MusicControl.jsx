import PropTypes from 'prop-types';

const MusicControl = ({ isPlaying, onToggle }) => {
  return (
    <div
      id="music-control"
      className="fixed bottom-5 right-5 z-[9999]"
    >
      <button
        onClick={onToggle}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-['Oswald'] text-lg shadow-2xl transform hover:scale-110 transition-all flex items-center"
      >
        <i className={`fas ${isPlaying ? 'fa-volume-up' : 'fa-play'} mr-2`}></i>
        <span>{isPlaying ? 'MUSIC ON' : 'PLAY MUSIC'}</span>
      </button>
    </div>
  );
};

MusicControl.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MusicControl;
