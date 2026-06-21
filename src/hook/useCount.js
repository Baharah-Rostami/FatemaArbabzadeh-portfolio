import { useEffect, useRef, useState } from "react";

export function useCountUpOnView(target, duration = 1500) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;

            if (start >= end) {
              start = end;
              clearInterval(counter);
            }

            setValue(Math.floor(start));
          }, 16);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}