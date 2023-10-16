import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useScroll = () => {
  const isMobile = window.innerWidth < 768; // Adjust the threshold as needed
  const thresholds = {
    desktop: 0.5,
    mobile: 0.3,
  };

  const controls = useAnimation();
  const [element, view] = useInView({
    threshold: isMobile ? thresholds.mobile : thresholds.desktop,
  });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view, controls]);

  return [element, controls];
};
