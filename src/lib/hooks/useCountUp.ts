import { useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);
  return value;
}
