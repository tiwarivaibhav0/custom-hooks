import { useState, useRef, useEffect } from "react";
const useThrottle = (val, delay) => {
  const [throttledVal, setThrottledVal] = useState(val);
  const ref = useRef(Date.now());

  useEffect(() => {
    if (Date.now() - ref.current >= delay) {
      ref.current = Date.now();
      setThrottledVal(val);
    }
  }, [val, delay]);
  return throttledVal;
};

export default useThrottle;
