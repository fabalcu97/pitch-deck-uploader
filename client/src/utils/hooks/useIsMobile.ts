import { useEffect, useState } from 'react';

import { useWindowSize } from './useWindowSize';

const MOBILE_WIDTH = 425;

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    setIsMobile(!!(size.width && size.width <= MOBILE_WIDTH));
  }, [size]);

  return isMobile;
}
