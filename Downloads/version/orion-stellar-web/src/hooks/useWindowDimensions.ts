import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';

export default function useWindowDimensions() {
  const windowSize = useWindowSize();
  const [windowDimensions, setWindowDimensions] = useState(windowSize);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(windowSize);
    }
    console.log(`windowDimensions`, windowDimensions);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
