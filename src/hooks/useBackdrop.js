//react
import { useState } from "react";

export default function useBackdrop() {
  const [backdropOpen, setBackdropOpen] = useState(false);

  const openBackdrop = () => {
    setBackdropOpen(true);
  };

  const closeBackdrop = () => {
    setBackdropOpen(false);
  };

  return { backdropOpen, closeBackdrop, openBackdrop, setBackdropOpen };
}
