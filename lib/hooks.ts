import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export function useSectionInView(sectionName: SectionName, threshold = 0.85) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref, inView };
}
