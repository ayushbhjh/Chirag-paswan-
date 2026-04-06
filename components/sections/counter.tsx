"use client";

import { useEffect, useState } from "react";

export function Counter({
  target,
  duration = 1400,
  suffix = ""
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, step);

    return () => clearInterval(timer);
  }, [target, duration]);

  const isDecimal = target % 1 !== 0;
  return (
    <span>
      {isDecimal ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}
