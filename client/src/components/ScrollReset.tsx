import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function ScrollReset() {
  const [location] = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 1); // Delay 1ms osigurava da DOM bude mountovan
  }, [location]);

  return null;
}
