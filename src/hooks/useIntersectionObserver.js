//react
import { useState, useEffect, useRef } from "react";

export default function useIntersectionObserver(ref, threshold = 0) {
  const [entryState, setEntryState] = useState(null);
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([currentEntry]) => {
        setEntryState(currentEntry);
      },
      {
        threshold: threshold,
      }
    );
  }, [threshold]);

  useEffect(() => {
    const element = ref.current;

    observerRef.current.observe(element);

    return () => {
      observerRef.current.unobserve(element);
    };
  }, [ref]);

  return { entry: entryState, observer: observerRef.current };
}
