import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const loopDuration = 4530;
    const fadeTimer = setTimeout(() => setFading(true), loopDuration * 3);
    const doneTimer = setTimeout(() => onComplete(), loopDuration * 3 + 500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <img
        src="/pritish-loader.gif"
        alt=""
        style={{ width: 180, height: 'auto' }}
      />
    </div>
  );
};

export default LoadingScreen;
