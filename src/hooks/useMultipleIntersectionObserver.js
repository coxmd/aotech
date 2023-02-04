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

    const elements = refs.current;

    elements.forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      observerRef.current.disconnect();
    };
  }, [refs, threshold]);

  return { allEntries: entriesState, observer: observerRef.current };
}
