import { useEffect, useState } from 'react';

export function useResponsiveSize() {
  const [size, setSize] = useState(240);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSize(400);
      else if (window.innerWidth >= 768) setSize(320);
      else setSize(240);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
