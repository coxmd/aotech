//react
import { useState, useEffect, useRef } from "react";

export default function useMultipleIntersectionObserver(refs, threshold = 0) {
  const [entriesState, setEntriesState] = useState(null);
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setEntriesState(entries);
      },
      {
        threshold: threshold,
      }
    );
  }, [threshold]);

  useEffect(() => {
    const elements = refs.current;

    elements.forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observerRef.current.unobserve(el);
      });
    };
  }, [refs]);

  return { allEntries: entriesState, observer: observerRef.current };
}
