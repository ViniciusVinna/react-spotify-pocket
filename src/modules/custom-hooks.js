import { useEffect, useRef } from 'react';

/**
 * @param value
 * @returns {undefined}
 */
export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
