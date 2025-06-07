// client/src/components/PageLoader.tsx

import logo from '@/assets/soteco-logo-ondark.png';
import { useEffect, useState } from 'react';

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <img
        src={logo}
        alt="SOTECO logo"
        className="w-[350px] h-auto animate-fadeZoom"
      />
    </div>
  );
}
