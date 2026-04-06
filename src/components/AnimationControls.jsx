import '../styles/controls.css';

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div className="controls" role="region" aria-label="애니메이션 컨트롤">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="speed-control">
        <label htmlFor="speed-range" className="speed-label">
          속도: <span aria-live="polite">{speed}x</span>
        </label>
        <input
          id="speed-range"
          type="range"
          min="0.5"
          max="3"
          step="0.5"
          value={speed}
          onChange={(e) => onSpeedChange(parseFloat(e.target.value))}
          className="speed-slider"
          aria-label="애니메이션 속도 조절"
        />
        <div className="speed-marks" aria-hidden="true">
          <span>0.5x</span>
          <span>1x</span>
          <span>1.5x</span>
          <span>2x</span>
          <span>2.5x</span>
          <span>3x</span>
        </div>
      </div>
    </div>
  );
}
