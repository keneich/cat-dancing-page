import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed }) {
  const duration = (1 / speed).toFixed(2);

  return (
    <div className="dancing-cat-wrapper">
      <div
        className={`dancing-cat ${isPlaying ? 'dancing' : 'paused'}`}
        style={{ '--dance-duration': `${duration}s` }}
        aria-label="춤추는 고양이"
        role="img"
      >
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className="cat-image"
        />
      </div>
      <div className="music-notes" aria-hidden="true">
        {isPlaying && (
          <>
            <span className="note note-1">♪</span>
            <span className="note note-2">♫</span>
            <span className="note note-3">♩</span>
            <span className="note note-4">♬</span>
          </>
        )}
      </div>
    </div>
  );
}
