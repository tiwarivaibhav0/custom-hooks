import { useState, useEffect } from "react";
export const useDebounce = (val, delay) => {
  const [debouncedVal, setDebouncedVal] = useState(val);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);
    return () => clearTimeout(timer);
  }, [val, delay]);

  return debouncedVal;
};

export default useDebounce;
